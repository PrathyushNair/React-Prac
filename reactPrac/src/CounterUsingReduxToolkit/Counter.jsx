import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement,incrementbyAmount,decrementbyAmount} from "./counterSlice";
export function ReduxCounter(){
const count=useSelector((state)=>state.counter.value)
const dispatch=useDispatch()
const [incrAmount,setIncrAmount]=React.useState(null)
const [decrAmount,setDecrAmount]=React.useState(null)
return (
    <div style={{ padding: '20px' }}>
      <h1>Redux Toolkit Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <br /><br />
      <input
        type="number"
        value={incrAmount}
        onChange={(e) => setIncrAmount(Number(e.target.value))}
        placeholder="Increment by"
      />
      <button onClick={() => dispatch(incrementbyAmount(incrAmount))}>Add Amount</button>

      <input
        type="number"
        value={decrAmount}
        onChange={(e) => setDecrAmount(Number(e.target.value))}
        placeholder="Decrement by"
      />
      <button onClick={() => dispatch(decrementbyAmount(decrAmount))}>Subtract Amount</button>
    </div>
  );
}