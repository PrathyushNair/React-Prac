import React from "react";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({children}){
    console.log("ProtectedRoute component rendered");
    const {userState}=useAuth()
    const [seconds,setSeconds]=React.useState(5)
    const navigate=useNavigate()
    React.useEffect(() => {
        if (!userState.isloggedIn) {
          const intervalId = setInterval(() => {
            setSeconds((prev) => prev - 1);
          }, 1000);
    
          const timeoutId = setTimeout(() => {
            navigate('/login');
          }, 5000);
    
          return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
          };
        }
      }, [userState.isloggedIn, navigate]);

    if(!userState.isloggedIn){
        return(
            <div>Redirecting you to login page in {seconds}...</div>
        )
    }
    return children
}