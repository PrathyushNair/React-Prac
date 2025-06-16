import React from "react";

//useState state management
export function Counter(){
    const [count,setCount]=React.useState(0)
    const handleIncreament=()=>{
        setCount(prevCount=>prevCount+1)
    }
    const handleDecreament=()=>{
        setCount(prevCount=>prevCount-1)
    }
    return(
        <>
        <p>Count is:{count} </p>
        <button onClick={handleIncreament}>Add</button>
        <button onClick={handleDecreament}>Subtract</button>
        </>
    )
}