import React from "react";
import { useUser } from "../contexts/UserContext";

export function UserDisplay(){
    const {state}=useUser()
    if (state.userFetchState==='idle') return null;
    if (state.userFetchState==='inProgress') return <p>Loading users...</p>;
    if (state.userFetchState==='error') return <p>Error: AN UNEXPECTED ERROR OCCURED</p>;
    if (state.userFetchState==='timeOutError') return <p>Error: API TIMEOUT</p>;
    
    return(
        <>
    <div style={{ padding: '1rem' }}>
      <h2>User List</h2>
      <ul>
        {state.users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
        </>
    )
}