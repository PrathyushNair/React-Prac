import React from 'react'

export function usePagination(data,countOfDataToShow){
    const[currentPage,setCurrentPage]=React.useState(1)
    const totalPages=Math.ceil(data.length/countOfDataToShow)
    console.log('totalPages',totalPages)
    const dataToShow=React.useMemo(()=>{
        const startIndex=(currentPage-1)*countOfDataToShow
        const endIndex=startIndex+countOfDataToShow
       let dataToShow= data.slice(startIndex,endIndex)
       console.log('dataToShow',dataToShow)
        return dataToShow
    },[data,currentPage,countOfDataToShow])
    function goToNextPage(){
        setCurrentPage((prevPage)=>prevPage+1)
    }
    function goToPreviousPage()
    {
        setCurrentPage((current)=>current-1)
    }
    function goToSpecificPage(pageNumber)
    {  console.log('goToSpecificPage',pageNumber)
        setCurrentPage(pageNumber)
    }
    return {currentPage,totalPages,countOfDataToShow,dataToShow,goToNextPage,goToPreviousPage,goToSpecificPage}
}