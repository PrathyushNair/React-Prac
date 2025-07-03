

//normal debounce
const debounce=(fn,delay)=>{
    let timerId;
    return function (){
        const context = this;
        const args = arguments;
        clearTimeout(timerId)
        timerId=setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }

}

// debounce with an immediate flag

const debounceWithImmediateFlag=(fn,delay,immediate)=>{
    let timerId;
    return function(){
        const context=this
        const args=arguments
        const callNow=immediate && !timerId
        clearTimeout(timerId)
        timerId=setTimeout(()=>{
            timerId=null
            if(!immediate){
                fn.apply(context,args)
            }
        },delay)
        if(callNow){
            fn.apply(context,args)
        }
    }
}