
import './App.css';
import { CartWidgetComponent } from './components/CartWidgetComponent/CartWidgetComponent';
import NavbarComponent from './components/Main/Navbar';
import { Greetings } from './components/Main/Greetings';
import farol from "./images/farol.jpg"
import item1 from "./images/item1.jpg"
import araña from "./images/araña.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  
  

  return (
    <>
    <NavbarComponent></NavbarComponent>
    <h1 className='titulo'>Tienda</h1>
    <Greetings user={"Gonza"} />
    <ItemListContainer/>
    <ShoppingCartIcon />
    </>

  );
}

export default App;
