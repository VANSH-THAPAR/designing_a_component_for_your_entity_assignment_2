// write product card here
import React from "react";
import button from "./button";


const Productcard =({productimage,productname,price,productbutton})=>{
    return(
        <div className="productcard">

            <img src={productimage} alt="photo" />
            <h2>{productname}</h2>
            <h2>{price}</h2>
            <button style={{color:'darkblue',backgroundColor:'lightblue',size:"120px"}}label={productbutton}/>

        </div>
    )
}

export default Productcard; 