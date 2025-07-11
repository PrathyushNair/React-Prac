import React from "react";
import "./Accordian.styles.css";
export function Accordian({ children }) {
    const [isOpen,setIsOpen]=React.useState(false)

    function handleChange(){
        setIsOpen((prevState)=>!prevState)
    }
  return (
    <div className={"accordianRootDiv"}>
        
      <span className={"accordianLabelDiv"}>
        <span>Accordian Label</span>
        <span className={'clickButton'} onClick={()=>handleChange()}>+</span>
      </span>
      <div  className={`accordionChildrenContainer ${isOpen ? 'open' : ''}`}>
       {<div className={"accordianChildContainer"}>{children}</div>} 
      </div>
    </div>
  );
}
