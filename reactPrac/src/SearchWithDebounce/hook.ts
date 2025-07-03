import React from "react";

//Debouncing a value
export function useDebounce(val,delay){
    const [debouncedVal,setDebouncedVal]=React.useState('')
    React.useEffect(()=>{
         let timerId=setTimeout(()=>{
            setDebouncedVal(val)
        },delay)
        return () => {
            clearTimeout(timerId);
        };
    },[val,delay])
    return {debouncedVal}
}

//Debouncing a function 

export function useDebounceForFunction(fn,delay){
    let timerId=React.useRef<ReturnType<typeof setTimeout>|null>(null)
    const debounceFunction=React.useCallback((...args)=>{
        if(timerId.current){
            clearTimeout(timerId.current)
        }
        timerId.current=setTimeout(()=>{
            fn(...args)
        },delay)
    },[fn,delay])
    React.useEffect(()=>{
        return ()=>{
            if(timerId.current){
                clearTimeout(timerId.current)}
            }
    })
    return debounceFunction
}