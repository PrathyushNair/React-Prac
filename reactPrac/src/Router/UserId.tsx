import React from "react";
import { useParams } from "react-router-dom";
export function UserId(){
    const {userId}=useParams()
    return(<>
    <h1>UserId:{userId}</h1>
    </>)
}