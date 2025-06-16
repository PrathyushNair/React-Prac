import React from "react";

export function Form(){
    const [formData,setFormData]=React.useState({name:'',email:'',password:''});
    const[formErrors,setFormErrors]=React.useState({});
    function validateForm(){
        let anyFieldEmpty=false
        const error={name:'',email:'',password:''}
        console.log('dddd',formData.name.length,formData.email.length,formData.password.length)
        if( formData.name.length===0){
            error.name='Name is required'
            anyFieldEmpty=true;
        }
        if(formData.email.length===0){
            error.email='Email is required'
           anyFieldEmpty=true;}
        if(formData.password.length===0){
            error.password='Password is required'
           anyFieldEmpty=true;
        }
        setFormErrors(error);
        if(anyFieldEmpty){
            return false;
        }
        return true;
    }
    function handleSubmit(e){
        e.preventDefault()
        let x=validateForm()
        if(x){
            console.log(formData)
            alert('Form submitted successfully')
        }
        else{
            console.log('formerrors',formErrors)
            console.log('Form is invalid')
            return;
        }
        return
    }
    return(<>
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
               {formErrors.name&&<p style={{color:'red'}}>{formErrors.name}</p>} 
            </label>
            <br/>
            <label>
                Email:
                <input type="email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                {formErrors.email&&<p style={{color:'red'}}>{formErrors.email}</p>} 
            </label>
            <br/>
            <label>
                Password:
                <input type='password' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                {formErrors.password&&<p style={{color:'red'}}>{formErrors.password}</p>} 
            </label>
            <button type='Submit'>Submit</button>
        </form>

    </div>

    </>)
}