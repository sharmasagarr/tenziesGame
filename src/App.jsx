import { useState, useRef, useEffect } from "react"
import { nanoid } from "nanoid"
import Die from "./components/Die"
import "./App.css"
import Confetti from "react-confetti"

export default function App(){
  const [dice, setDice] = useState(() => generateAllNewDice())
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(0)
  const buttonRef = useRef(null)

  const gameWon = dice.every(dieObj => dieObj.isHeld===true && dieObj.value===dice[0].value)
  
  useEffect(() => {
    if(gameWon){
      buttonRef.current.focus()
    }
  }, [gameWon])

  useEffect(() => {
    if (gameWon) return
    if (timer >= 499) return

    const intervalId = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 1000)

    return () => clearInterval(intervalId);
  },[gameWon])

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
      setCount(count => count+1)
    } else {
      setDice(generateAllNewDice())
      setCount(0)
      setTimer(0)
      buttonRef.current.focus()
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
      {gameWon && 
        <Confetti
          recycle={false}
          numberOfPieces={2000}
          width={window.innerWidth} 
          height={window.innerHeight} 
        />
      }
      <div>
        <div className={`timer ${gameWon ? "blink": null}`}>
          <p>Timer: </p>
          <span>{String(timer).padStart(2, '0')}s</span>
        </div>
        <h1>Tenzies</h1>
        <p>Roll until all dice are same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className="dice-container">
        {diceElements}
      </div>
      <div className="roll-button">
        <button onClick={rollDice} ref={buttonRef}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </div>
      <div className="count">
        <p>
          {gameWon ? `Total Count: ${count}`: `Count: ${count}`}
        </p>
      </div>
    </main>
)
}