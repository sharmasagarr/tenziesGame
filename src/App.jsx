import { useState } from "react"
import { nanoid } from "nanoid"
import Die from "./components/Die"
import "./App.css"
import Confetti from "react-confetti"

export default function App(){
  const [dice, setDice] = useState(() => generateAllNewDice())

  const gameWon = dice.every(dieObj => dieObj.isHeld===true && dieObj.value===dice[0].value)
  
  function generateAllNewDice(){
    return new Array(10)
      .fill(0)
      .map(() => (
        {
          value: Math.ceil(Math.random() * 6), 
          isHeld: false,
          id: nanoid()
        }
      )
    )
  }

  function rollDice(){
    if (!gameWon){
      setDice(oldDice => {
        return oldDice.map(die => {
          return {
            ...die, 
            value: die.isHeld ? die.value : Math.ceil(Math.random() * 6)
          }}
        )}
      )
    } else {
      setDice(generateAllNewDice())
    }
  }

  function hold(id){
    setDice(oldDice => {
      return oldDice.map(dieObj => {
        return {
          ...dieObj, 
          isHeld: dieObj.id===id ? !dieObj.isHeld : dieObj.isHeld
        }
      })
    })
  }

  const diceElements = dice.map((dieObj) => {
      return <Die 
        key={dieObj.id} 
        id={dieObj.id} 
        value={dieObj.value} 
        isHeld={dieObj.isHeld} 
        hold={hold} 
      />
  })

  return (
    <main>
      {gameWon && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div>
        <h1>Tenzies</h1>
        <p>Roll until all dice are same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className="dice-container">
        {diceElements}
      </div>
      <div className="roll-button">
        <button onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
)
}