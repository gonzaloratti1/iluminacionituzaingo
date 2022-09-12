import './App.css';
import NavbarComponent from './components/Main/Navbar';
import { Greetings } from './components/Main/Greetings';
import React from 'react';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';



const App = () => {
  
  return (
    <>
    <NavbarComponent />
    <Greetings></Greetings>
    <ItemList></ItemList>
    <ItemDetailContainer></ItemDetailContainer>
    </>

  );
}

export default App;
