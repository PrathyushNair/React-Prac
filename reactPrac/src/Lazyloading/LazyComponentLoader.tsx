import React,{Suspense,lazy} from "react";

const Component=lazy(async ()=>
 await import('./LazyComponent')

)
export function LazyComponentLoader(){
    return(<>
    <Suspense fallback={<div>Component are loading please wait...</div>}>
        <Component/>
    </Suspense>
    </>)
}