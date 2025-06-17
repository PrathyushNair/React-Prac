import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import React from 'react';
import { Profile } from './Profile';
import { UserId } from './UserId';
import { ProtectedRoute } from './AuthContext/ProtectedRoute';

export function MainRouter(){
return(

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute> }></Route>
        <Route path='/user/:userId' element={<UserId/>}></Route>
        <Route path='*' element={<h1>404 Not Found</h1>}></Route>
    </Routes>

)

}