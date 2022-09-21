import React from 'react'
import { useContext } from 'react';
import { clearAll } from '@mui/icons-material';
import CartItem from '../CartItem/CartItem';
import { CartContext, useCartContext } from '../CartContext/CartContext';
import CartContextProvider from '../CartContext/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail';



const Cart = () => {
  
  
   const { cartList, clear, removeItem} = useContext(CartContext);

    return (
      <>
      <div>
        <h1>Carrito</h1>
        <button onClick={clear}>Borrar todo</button>
      </div>
      <div>
          {
          cartList.map(item => <li>{item.name} ${item.cost}<button onClick={ ()=> removeItem(item.id)}>Eliminar</button></li>)
          }
        </div>
      </>
  )
  }
export default Cart
