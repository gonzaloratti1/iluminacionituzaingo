import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

import { useCartContext } from '../CartContext/CartContext'

const ItemDetail = ({ item }) => {

    
    const [ itemCount, setItemCount] = useState(0)
    const { addItem } = useCartContext();

  

    const onAdd = ( quantity) => {
        alert("Seleccionaste " + quantity + " items")
        setItemCount(quantity)
        addItem(item, quantity)
        console.log(item)
    }

    return (

    <>
        {
            item && item.image 
            ?
            <div className='detail-item'>
                <div className='detail'>
                    <div className='description'>
                        <h1>{item.name}</h1>
                        <p align="bottom">{item.description}</p>
                        <img src={item.image} alt=""></img>
                        <strong className='cost'>${item.cost}</strong>
                        {
                            itemCount === 0
                         ? <ItemCount  stock={item.stock} initial={itemCount} onAdd={onAdd}   /> 
                         :  <Link to='/cart' style={{ textDecoration:'none'}}><button>Checkout</button></Link> 
                        }
                       <br></br>
                    </div>
                </div>
            </div>
            :
            <p>Cargando...123</p>
        }
    </>
  
    )
}

export default ItemDetail



