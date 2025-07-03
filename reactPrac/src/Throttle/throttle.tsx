

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