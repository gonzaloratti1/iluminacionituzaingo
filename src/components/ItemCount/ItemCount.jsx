import React, { useState } from "react";
import "./ItemCount.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const ItemCount = ({initial, stock, onAdd}) => {

    const [ count, setCount ] = useState(initial)

    const suma = () => {
        setCount( count + 1)
    }

    const resta = () => {
        setCount( count - 1)
    }

    return (
        <div className="counter">
            <button disabled={count <= 1 } onClick={resta}> - </button>
        <span>{count}</span>
            <button disabled={count >= stock} onClick={suma}> + </button>
        <div>
            <button disabled={ stock <= 0} onClick={ () => onAdd(count)}> Agregar al carrito </button>
        </div>
        <div></div>
        </div>
    )
}

export default ItemCount