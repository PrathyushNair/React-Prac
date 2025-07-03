import React from "react";

export default function LazyComponent(){
    const [data,setData]=React.useState([])
    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>
            response.json()
        )
        .then(resp=>
            setData(resp)
        )
    })
    return (
        <>
         {data.map((el:{userId: number,id: number,title: string,completed: boolean})=>{
            return <div key={el.id}>
                <p>Tilte:{el.title}</p>
                <p>Completed:{el.completed? 'True':'False'}</p>
            </div>
        })}
        </>
    )
}