import './App.css';
import ItemList from './components/ItemList/ItemList';
import { CartWidgetComponent } from './components/CartWidgetComponent/CartWidgetComponent';
import NavbarComponent from './components/Main/Navbar';
import { Greetings } from './components/Main/Greetings';
import farol from "./images/farol.jpg"
import item1 from "./images/item1.jpg"
import araña from "./images/araña.jpg"
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import React from 'react';

const App = () => {
  
  return (
    <>
    <NavbarComponent/>

    <h1 className='titulo'>Tienda</h1>

    <Greetings user={"Gonza"} />

    <div className='wrapper'>

    <ItemList />
    </div>



    </>

  );
}

export default App;
