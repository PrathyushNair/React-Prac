import React from "react";
import { useAuth } from "./AuthContext/authContext";

export function Login(){
    const {userState,login,logout}=useAuth()
    function handleLogin(userName){
        login(userName)
    }
    function handleLogout(){
        logout()
    }
    return(<>
    <h1>Login</h1>
    <button onClick={() => userState.isloggedIn ? handleLogout() : handleLogin('Prathyush')}>
  {userState.isloggedIn ? 'Logout' : 'Login'}
</button>
    </>)
}