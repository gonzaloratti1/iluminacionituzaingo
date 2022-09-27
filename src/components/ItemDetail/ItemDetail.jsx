import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item'
import Items from '../Utils/itemData/ItemData'
import ItemList from '../ItemList/ItemList'
import "./ItemDetail.css"
import { CartContext } from '../CartContext/CartContext'
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
            <div>
                <div className='detail'>
                    <div className='description'>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <img src={item.image}></img>
                        <strong className='cost'>${item.cost}</strong>
                        
                        {
                            itemCount === 0
                         ? <ItemCount  stock={item.stock} initial={itemCount} onAdd={onAdd}   /> 
                         :  <Link to='/cart' style={{ textDecoration:'none'}}><button>Checkout</button></Link> 
                        }
                       
                    </div>
                </div>
            </div>
            :
            <p>Cargando...</p>
        }
    </>
  
    )
}

export default ItemDetail



