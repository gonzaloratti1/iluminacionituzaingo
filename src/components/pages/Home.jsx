import React from 'react'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from '../Main/Navbar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';



const Home = () => {
  return (
    <BrowserRouter>
        <NavbarComponent/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>} />
            <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
   

  )
}

export default Home