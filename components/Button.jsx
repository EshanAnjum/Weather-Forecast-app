import React from "react";


const Button = (props)=>{
    console.log("button" , props.onClick);
    return (
        <button className="btn" onClick={props.onClick}>{props.value}  </button>
    )
}

export default Button;

// props.onclick executes the corresponding onClick function to the button