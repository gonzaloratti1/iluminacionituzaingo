
import './App.css';
import { CartWidgetComponent }  from './components/CartWidgetComponent';
import NavbarComponent  from './components/Navbar';
import farol from "./images/farol.jpg"
import item1 from "./images/item1.jpg"
import araña from "./images/araña.jpg"
import { Greetings } from './components/Greetings';


const App = () => {
  return (
    <>
    <NavbarComponent></NavbarComponent>

    <h1 className='titulo'>Tienda</h1>
    <hr></hr>
    <Greetings user={"Gonza"} />

    <CartWidgetComponent name={"Lampara"} description={"15 Watts - Luz Calida"} cost={"$120"} image={item1} />
    
    <CartWidgetComponent name={"Farol"} description={"20 Watts - Luz Fria"}  cost={"$2000"} image={farol} />

    <CartWidgetComponent name={"Araña"} description={"15 Watts - Luz Fria"}  cost={"$3500"} image={araña} />
    
    </>

  );
}

export default App;
