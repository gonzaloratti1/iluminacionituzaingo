import React from "react";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../Main/Navbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Cart from "../Cart/Cart";
import CartContextProvider from "../CartContext/CartContext";
import Checkout from "../Checkout/Checkout";

const Home = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default Home;
