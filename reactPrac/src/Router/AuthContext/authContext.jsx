import React,{createContext,useContext} from "react";

const AuthContext=createContext()

export function AuthProvider({children}){
    const [userState,setUserState]=React.useState({isloggedIn:false,userName:''})
    function login(userName){
        setUserState({isloggedIn:true,userName})
    }
    function logout(){
        setUserState({isloggedIn:false,userName:''})
    }
    return(
        <AuthContext.Provider value={{userState,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>{
    const context= useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}