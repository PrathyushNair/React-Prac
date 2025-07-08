import React from "react";
// import { v4 as uuidv4 } from "uuid";
import "./OtpMainComponentStyle.css";
export function OtpMainComponent() {
  const [otpInput, setOtpInput] = React.useState(["", "", "", "", "", ""]);
  const maxOtpLength = 6;
  const otpRefs = React.useRef([]);
  function handleOtpInput(e, index) {
    const newArr = [...otpInput];
    newArr[index] = e.target.value;
    setOtpInput(() => newArr);
      otpRefs.current[index + 1]?.focus();
  }
  function handleSubmit() {
    console.log("otpInput", otpInput);
  }
  function handleKeyDown(e, index) {
    if (e.key === "Backspace" ) {
      e.preventDefault(); 
      const newArr = [...otpInput];
      if (newArr[index] === "" && index > 0) {
        otpRefs.current[index - 1]?.focus();
      } else {
        newArr[index] = "";
        otpRefs.current[index - 1]?.focus();
      }
      setOtpInput(newArr);
    }
    if(e.key==='Enter'){
      handleSubmit()
    }
  }
  function handlePaste(e) {
    e.preventDefault();
  
    const pastedData = e.clipboardData.getData("text/plain").replace(/\D/g, ""); // Only digits
    if (!pastedData) return;
  
    const newArr = [...otpInput];
  
    for (let i = 0; i < maxOtpLength; i++) {
      newArr[i] = pastedData[i] || "";
    }
    setOtpInput(newArr)
  }
  return (
    <div className={"otpRootDiv"}>
      <div className={"otpInputDiv"}>
        {Array.from({ length: maxOtpLength }, (_, index) => {
          return (
            <input
            maxLength={1}
              ref={(el) => (otpRefs.current[index] = el)}
              value={otpInput[index]}
              onPaste={(e)=>handlePaste(e)}
              onChange={(e) => handleOtpInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={"otpInputBox"}
              key={index}
            />
          );
        })}
      </div>
      <button onClick={() => handleSubmit()}>Submit otp</button>
    </div>
  );
}
