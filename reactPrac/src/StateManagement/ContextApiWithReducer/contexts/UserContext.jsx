import React,{createContext,useContext} from "react";
import { initialState, userReducer } from "../reducer";

const UserContext=createContext()

export function UserProvider({children}){
    const[state,dispatch]=React.useReducer(userReducer,initialState)
    React.useEffect(()=>{
        dispatch({ type: 'USER_FETCH_INPROGRESS', payload: [] })
       async  function fetchData(timeOut){
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeOut); 
        fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
          .then(response => response.json())
          .then(data => {
            clearTimeout(timeoutId);
            console.log(data);
            dispatch({ type: 'USER_FETCH_SUCCESS', payload: data });
          })
          .catch(error => {
            clearTimeout(timeoutId);
            if (error.name === 'AbortError') {
              console.log('Fetch request timed out');
              dispatch({ type: 'USER_FETCH_TIMEOUT', payload:'' });
            } else {
              console.error('Fetch error:', error);
              dispatch({ type: 'USER_FETCH_ERROR', payload: ''});
            }
          });
       }
       fetchData(10000)
    },[])
    return(<UserContext.Provider value={{state,dispatch}}>
        {children}
    </UserContext.Provider>
    )
}

export const useUser=()=>{
    const context=useContext(UserContext)
    if(!context){
        throw new Error("useUser must be used within a UserProvider");
    }
    return context
}