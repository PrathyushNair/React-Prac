import {createSlice} from '@reduxjs/toolkit';

const initialState={
    value:0
}

export const counterSlice=createSlice({
 name:'counter',
 initialState,
 reducers:{
 increment:(state)=>{state.value=state.value+1},
 decrement:(state)=>{state.value=state.value-1},
 incrementbyAmount:(state,action)=>{
    state.value=state.value+action.payload
 },
 decrementbyAmount:(state,action)=>{
    state.value=state.value-action.payload
 }
 }
})

export const {increment,decrement,incrementbyAmount,decrementbyAmount}=counterSlice.actions;
export default counterSlice.reducer