import PropTypes from "prop-types"

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "lightgreen" : "white",
        border: props.isHeld ? "2px solid black" : "none"
    }
    return <button style={styles} onClick={() => props.hold(props.id)}>{props.value}</button>
}

Die.propTypes = {
    value: PropTypes.number,
    isHeld: PropTypes.bool,
    hold: PropTypes.func,
    id: PropTypes.string.isRequired
}