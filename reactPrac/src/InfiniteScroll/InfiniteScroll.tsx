import React, { JSXElementConstructor, useEffect } from "react";

export function InfiniteScroll(){
    const [count,setCount]=React.useState(50)
    const [stopScroll,setStopScroll]=React.useState(false)
 useEffect(()=>{
    const onScroll=()=>{
        //Logic to break scrolling
        if(count >= 200){
            window.removeEventListener('scroll',onScroll)
            setStopScroll(true)
        }
        if(window.innerHeight+window.scrollY>=window.document.body.offsetHeight-40)
            setCount((prevCount)=>prevCount+50)
    }

    window.addEventListener('scroll',onScroll)
    return ()=> window.removeEventListener('scroll',onScroll)
 },[count])
    let elements:any=[]
    for(let i=0;i<count;i++){
        elements.push(<div key={i}>{i+1}</div>)
    }

    return(
        <>
        <main>
            {elements}
            {stopScroll&&<div><p>No More Scrolling</p></div>}
        </main>
        </>
    )
}