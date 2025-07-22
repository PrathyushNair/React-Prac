
import React from "react"
export const throttle=(fn,delay)=>{
    let lastExecuted=0
    let timerId:number|null=null
    return function(){
        const context=this
        const args=arguments
        const now=Date.now()
        const timeLastExecuted=now-lastExecuted
        if(timeLastExecuted>=delay){
            fn.apply(context,args)
            lastExecuted=Date.now()
        }
        if(!timerId){
            timerId=setTimeout(()=>{
                fn.apply(context,args)
                lastExecuted=Date.now()
                timerId=null
            },delay-timeLastExecuted)
        }
    }
}

function useThrottle(fn, delay) {
    const timerId = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    let lastEcexutedTime = 0;
    const throttledFunction = React.useCallback(
      (...args) => {
        const timeFromLastExecution = Date.now() - lastEcexutedTime;
        if (timeFromLastExecution > delay) {
          fn(...args);
          lastEcexutedTime = Date.now();
        } else if (!timerId.current) {
          timerId.current = setTimeout(() => {
            fn(...args);
            lastEcexutedTime = Date.now();
          }, delay - timeFromLastExecution);
        }
      },
      [fn, delay]
    );
    return throttledFunction;
  }