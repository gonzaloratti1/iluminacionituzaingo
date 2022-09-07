import React from "react";
import Items from "../Utils/itemData/ItemData";
import ItemCount from "../ItemCount/ItemCount";
import "../../App.css"


const Item = ({ id, name, image, description, cost, stock}) => {
    return (
       <div>
       
            <h2>{name}</h2>
            <img src={image} alt="" className="image" />
            {/* <p>{cost}</p> */}
            {/* <p>Numero de Articulo {id}</p> */}
            {/* <p>{description}</p> */}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <ItemCount initial={1} stock={stock} onAdd={5} className/>
        </div>   
        
    )

}

export default Item