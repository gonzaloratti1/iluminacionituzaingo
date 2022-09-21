import { createContext, useState, useContext } from "react";
import React from "react";
import ItemList from "../ItemList/ItemList";
import Item from "../Item/Item";
import Items from "../Utils/itemData/ItemData";


export const useCartContext = () => useContext(CartContext)

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);
    const [showCart, setShowCart] = useState(false)
    



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

    return (
    
    <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
        { children }
    </CartContext.Provider>
    
    );
}

export default CartContextProvider;


 