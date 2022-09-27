import React from 'react'
import { useContext } from 'react';
import { clearAll } from '@mui/icons-material';
import CartItem from '../CartItem/CartItem';
import { CartContext, useCartContext } from '../CartContext/CartContext';
import CartContextProvider from '../CartContext/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail';
import { NavLink } from 'react-router-dom';



const Cart = () => {
  
  
   const { cartList, clear, totalPrice} = useContext(CartContext);

  

  if (cartList.length === 0){
    return (
      <>

        <h1>No hay elementos en el carrito</h1>
        <NavLink to='/'><button>Seguir comprando</button></NavLink>
        
      </>
    )
  }

    return (
      <>
      <div>
        <h1>Carrito</h1>
        <button onClick={clear}>Borrar Articulos</button>
      </div>
      
      <div>
          {
          cartList.map(item => <CartItem key={item.id} item={item}/>)
          }
        </div>
      </>
  )
  }
export default Cart
