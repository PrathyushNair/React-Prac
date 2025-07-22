import React from "react";

export function Slide({imageUrl,imageCaption,active}){
    return(
        <div className={`slide ${active ? 'active':''}`}>
            <img src={imageUrl} alt={imageCaption}/>
            <span>{imageCaption}</span>
        </div>
    )
}