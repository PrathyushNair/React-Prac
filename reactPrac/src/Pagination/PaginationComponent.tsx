import React from "react";

export function Pagination({totalPages,currentPage,goToNextPage,goToPrevPage,goToSpecificPage}){
    return (
        <>
        <div>
            <button onClick={goToPrevPage} disabled={currentPage==1}>
                Previous
            </button>
            {
                Array.from({length:totalPages},(_,ind)=>(
                    <button
                    key={ind+1}
                    style={{
                        margin: '0 5px',
                        fontWeight: currentPage === ind + 1 ? 'bold' : 'normal',
                      }}
                    onClick={()=>goToSpecificPage(ind+1)}>

                        {ind+1}
                    </button>
                ))
            }
            <button onClick={goToNextPage} disabled={currentPage==totalPages}>
                Next
            </button>
        </div>
        </>
    )

}