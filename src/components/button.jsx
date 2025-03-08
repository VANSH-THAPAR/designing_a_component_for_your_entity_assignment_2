// write button card here
import React from "react";

const Button=({label,onClick})=>{
    return(
        <button className="viewproduct button" onClick={onClick}>{label}</button>
    )
}


export default Button;