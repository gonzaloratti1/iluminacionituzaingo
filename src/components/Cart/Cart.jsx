import React from 'react'
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../CartContext/CartContext';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment, getFirestore, addDoc } from 'firebase/firestore';
import db  from '../Utils/FirebaseConfig'



const Cart = () => {
  
  
   const { cartList, clear, totalPrice} = useContext(CartContext);
   const test = useContext(CartContext)

  const order = {
    buyer: {
      name: "Gonza",
      email: "gonza@gmail.com",
      phone: "22131515",
      address: "hola 123"
    },
    items: cartList.map( item =>({id: item.id, name: item.name, cost: item.cost, quantity: item.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id)) 
  }


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
        
        <button key="1" onClick={clear}>Borrar Articulos</button>
      </div>
      
      <div>
          {
          cartList.map(item => <CartItem key={item.id} item={item}/>)
          }
        </div>
        <div>
        <p>Total: ${totalPrice()}</p>
        </div>
        <div>
          <button onClick={handleClick}><Link to="/checkout">Finalizar compra</Link></button>
        </div>
        
      </>
  )
  }
export default Cart
