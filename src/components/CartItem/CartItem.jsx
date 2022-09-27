import React from 'react'
import { CartContext, useCartContext } from '../CartContext/CartContext'
import Items from '../Utils/itemData/ItemData'

const CartItem = ({ item }) => {
  
    const { removeItem } = useCartContext(CartContext)

    return (
        <>
        <div>
            <img src={item.image} />
        <div>
            <p>Titulo: {item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: {item.cost}</p>
            <p>Subtotal: {item.quantity * item.cost}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
        </div>

        </>
  )
}

export default CartItem