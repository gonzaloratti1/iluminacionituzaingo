import React from "react"

export const Greetings = (props) => {
    return (
       <div className="container-user"> 
        <h3>Bienvenido a nuestra Tienda, {props.user}!</h3>
       </div>
    )
 }
 