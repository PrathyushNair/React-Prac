import React from "react"
import { usePage } from "./usePage"
import { Pagination } from "./PaginationComponent"
export function PaginationDataDisplay(){
    const[data,setData]=React.useState([])
    const {totalPages,currentData,currentPage,goToNextPage,goToPrevPage,goToSpecificPage}=usePage(data.length)
    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json))
    },[])
    return(
        <>
        {currentData(data).map((el:{userId: number,id: number,title: string,completed: boolean})=>{
            return <div key={el.id}>
                <p>Tilte:{el.title}</p>
                <p>Completed:{el.completed? 'True':'False'}</p>
            </div>
        })}
        <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        goToSpecificPage={goToSpecificPage}
        />
        </>
    )
}