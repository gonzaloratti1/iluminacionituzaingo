import React from 'react'
import { CartContext } from '../CartContext/CartContext'
import Items from '../Utils/itemData/ItemData'

const CartItem = ({ item }) => {
  
    return (
        <>
        <div>
            <li>{item.name} ${item.cost} </li>
        </div>

        </>
  )
}

export default CartItem