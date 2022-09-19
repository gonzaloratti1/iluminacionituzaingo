import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item'
import Items from '../Utils/itemData/ItemData'
import ItemList from '../ItemList/ItemList'
import "./ItemDetail.css"


const ItemDetail = ({ item, initial }) => {

    const [showCart, setShowCart] = useState(false)
      
    const onAdd = (count) => {
        setShowCart(true)
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
                            showCart
                         ? <Link to='/cart' style={{ textDecoration:'none'}}><button className='check' value="showBtn">Checkout</button></Link> 
                         :  <ItemCount  stock={item.stock} initial={initial} onAdd={onAdd}   />
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



