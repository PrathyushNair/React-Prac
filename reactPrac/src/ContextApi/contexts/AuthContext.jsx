import React,{createContext,useContext} from "react";

const AuthContext=createContext();

export function AuthProvider({children}){
    const [user,setUser]=React.useState(null)
    function login(userName){
    setUser({name:userName})
    }
    function logout(){
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}r>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>{
    const context=useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context
}