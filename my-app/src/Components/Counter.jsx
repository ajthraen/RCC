import React, {useState} from "react"

function Counter() {
    const [counterValue, setCounter] = useState(0)
    function countUp(){
        setCounter((countValue) => countValue + 2)
        setCounter((countValue) => countValue - 1)
    }
    function countDown(){
        setCounter((countValue) => countValue - 2)
        setCounter((countValue) => countValue + 1)
    }
    return (
        <div className="container1">
            <div>
                <button onClick={countUp}>+</button>
                <h1>{counterValue}</h1>
                <button onClick={countDown}>-</button>
            </div>
        </div>
    );
}

export default Counter;