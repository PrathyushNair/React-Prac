import React from "react";
import {BrowserRouter as Router,Link } from "react-router-dom";

export function NavBar(){

    return(

            <nav>
            <Link to="/">Home</Link> | 
             <Link to="/login">Login</Link> | 
            <Link to="/profile">Profile</Link>
            </nav>

    )
}