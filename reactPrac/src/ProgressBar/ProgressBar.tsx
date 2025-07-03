import React from 'react'
import './ProgressBarStyle.css'
export function ProgressBar(){
const [progressValue,setProgressValue]=React.useState(0)
let intervalId=React.useRef<ReturnType<typeof setInterval>|null>(null)
React.useEffect(()=>{
console.log(document.querySelector('.outerDiv'))
    intervalId.current=setInterval(()=>{
        if(progressValue==100){
            setProgressValue(0)
            if(intervalId.current){
                clearInterval(intervalId.current)
            }
            intervalId.current = null; 
            return
        }
        setProgressValue((prevVal)=>prevVal+25)
    },500)
    return ()=>{
        if(intervalId.current){
            clearInterval(intervalId.current)
            intervalId.current = null; 
        }
    }
},[])

    return(
        <div className={'outerDiv'}>
            <div className={'progressIndicator'} style={{width:`${progressValue}%`}}>
                <span></span>
            </div>
        </div>
    )
}