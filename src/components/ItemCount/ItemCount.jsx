import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemCount.css"


export const ItemCount = ({initial = 1, stock, onAdd}) => {

    const [ count, setCount ] = useState(initial)

    useEffect(() => {
       setCount(initial)
    }, []);


    const suma = () => { 
        setCount( count + 1)
    }
    

    const resta = () => {
        setCount( count - 1)
    }


    return (
        <div className="container-counter">
        <strong>{Item.cost}</strong>

        
        <div className="counter">
        <button disabled={count <= 1} onClick={resta} className="btn btn-danger"> - </button>
        
            <span>{count}</span>
        
        <button  disabled={ count >= stock} onClick={suma} className="btn btn-success"> + </button>


        <div>
            <button disabled={ stock <= 0} onClick={ () => onAdd(count)}> Agregar al carrito </button>
        </div>
        
        </div>
        </div>
    )
}

export default ItemCount