import React, { useState } from "react";
import "./ItemCount.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Items from "../Utils/itemData/ItemData";
import Item from "../Item/Item";


export const ItemCount = ({initial, stock, onAdd, Items}) => {

    const [ count, setCount ] = useState(initial)

    const suma = () => {
        setCount( count + 1)
    }

    const resta = () => {
        setCount( count - 1)
    }

    // forEach de stock de cada item.


    return (
        <div className="container-counter">
        <p>{Item.cost}</p>
        <div className="counter">
        <i className="bi bi-cart4"></i> <button disabled={count <= 1} onClick={resta} className="btn btn-danger"> - </button>
        <span>{count}</span>
            <button disabled={count >= stock} onClick={suma} className="btn btn-success"> + </button>
        <div>
            <button disabled={ stock <= 0} onClick={ () => onAdd(count)}> Agregar al carrito </button>
        </div>
        
        </div>
        </div>
    )
}

export default ItemCount