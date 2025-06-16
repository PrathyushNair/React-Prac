import React,{createContext,useContext} from "react";

const ThemeContext=createContext()

export function ThemeProvider({children}){
    const [theme,setTheme]=React.useState('light')
    const toggleTheme=()=>{
        setTheme((prevTheme)=>prevTheme==='light'?'dark':'light')
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    )

}

export const useTheme=()=>{
    const context=useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}