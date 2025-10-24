import React from "react";
import { PaginationComponent } from "./PaginationComponent";
import { usePagination } from "./usePagination";
import { users } from "../userData";
export function Tablecomponent() {
  const [userData, setUserData] = React.useState<any>([]);
  const {
    currentPage,
    totalPages,
    countOfDataToShow,
    dataToShow,
    goToNextPage,
    goToPreviousPage,
    goToSpecificPage,
  } = usePagination(userData, 20);
  React.useEffect(()=>{
    setUserData(users)
  },[])
  console.log('userDataFrom',userData)
  return (
    <div>
      <p>{'I am para'}</p>
          <div style={{border: "2px solid green",display:'flex',justifyContent:"center",alignItems:'center'}}>
      <table style={{ border: "2px solid red" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid white" }}>Name</th>
            <th style={{ border: "2px solid white" }}>Email</th>
            <th style={{ border: "2px solid white" }}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((el) => (
            <tr>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    <div>
        <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        countOfDataToShow={countOfDataToShow}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        goToSpecificPage={goToSpecificPage}
      />
    </div>
    </div>

  );
}
