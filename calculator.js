import { useState } from "react"
import { evaluate } from "mathjs"
const Calculator = () => {
    const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="]
    const [display,setDisplay]= useState("")
    const clickHandler = (value) => {
        if(value==="="){
            setDisplay(evaluate(display))
        }else if(value==="c"){
            setDisplay("")
        }else {setDisplay(display+value)}
    }
    return (
        <div>
            <h1>calculator</h1>
            <h2>{display}</h2>
            {buttons.map((button, index) => {
                return (
                    <div>
                        <button onClick={() => clickHandler(button)}>{button}</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Calculator