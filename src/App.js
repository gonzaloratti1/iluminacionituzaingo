import './App.css';
import NavbarComponent from './components/Main/Navbar';
import { Greetings } from './components/Main/Greetings';
import React from 'react';
import ItemList from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Home from './components/pages/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  
  return (
    <>
    <NavbarComponent/>
   <ItemListContainer></ItemListContainer>
    </>

  );
}

export default App;
