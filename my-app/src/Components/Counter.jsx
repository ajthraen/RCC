import React, {useState} from "react"

function Counter() {
    const [arr, setArr] = useState([])
    function addPlus() {
        //You have to use the arrow format if the function
        //needs the previous value of the argument
        //If you dont need the previous argument, see 
        //the countUp example shown below
        //use:
        //setArr(prevArr => ([...prevArr, quantity: prevArr.quantity + 1]))
        //format when needing to target a specific item in an array data set
        //...prevArr breacks the items apart to target the one you want
        setArr(prevArr => [...prevArr, "+"])
        // console.log([arr]);
    }
    function addMinus() {
        setArr(prevArr => [...prevArr, "-"])
        // console.log([arr]);
    }
    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div>
    )
    // const [counterValue, setCounter] = useState(0)
    // function countUp(){
    //     setCounter(counterValue + 1)
    // }
    // function countDown(){
    //     setCounter((countValue) => countValue - 2)
    //     setCounter((countValue) => countValue + 1)
    // }
    // return (
    //     <div className="container1">
    //         <div>
    //             <button onClick={countUp}>+</button>
    //             <h1>{counterValue}</h1>
    //             <button onClick={countDown}>-</button>
    //         </div>
    //     </div>
    // );
}

export default Counter;