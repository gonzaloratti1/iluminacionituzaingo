import { createContext, useState, useContext } from "react";
import React from "react";


export const useCartContext = () => useContext(CartContext)

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);
  
    



    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            setCartList(cartList.map(item => {
                return item.id === item.id ? { ...item, quantity: item.quantity + quantity } : item
            }))
        }else {
            setCartList([...cartList, {...item, quantity}]);
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }

    const clear = () => {
        setCartList([])
    }

    const isInCart = (id) => cartList.find (item => item.id === id) ? true : false;

    const totalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.quantity * act.cost, 0)
    }

    const totalProducts = () => cartList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
 


    return (
    
    <CartContext.Provider value={{cartList, setCartList, addItem, clear, removeItem, totalPrice, totalProducts}}>
        { children }
    </CartContext.Provider>
    
    );
}

export default CartContextProvider;


 