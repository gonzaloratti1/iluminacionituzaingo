export const CartWidget = (props) => {
   return (
      <div className="container-item"> 
        <h2>{props.name}</h2>
        <img src={props.image} alt="" className="item-list"></img>
        <p>Precio: {props.cost}</p>
        <sub>{props.description}</sub>
      </div>
   )
}

