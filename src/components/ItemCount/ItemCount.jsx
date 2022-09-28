import React, { useState, useEffect } from "react";
import "./ItemCount.css"


export const ItemCount = ({initial, stock, onAdd}) => {

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
        
        <div className="counter">
        <button disabled={count <= 1} onClick={resta} className="btn btn-danger"> - </button>
        
            <span>{count}</span>
        
        <button  disabled={ count >= stock} onClick={suma} className="btn btn-success"> + </button>
            
            {
                stock && count
            ?    <button onClick={ () => onAdd(count)}> Agregar al carrito </button>
            :    <button disabled>Agregar al carrito</button>
            }
            </div>
        </div>
    )
}

export default ItemCount