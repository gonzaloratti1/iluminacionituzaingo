export const CartWidgetComponent = (props) => {
   return (
      <div className="container-item"> 
        <h2>{props.name}</h2>
        <sub>{props.description}</sub>
        <p>Precio: {props.cost}</p>
        <img src={props.image} alt="" className="item-list"></img>
      </div>
   )
}

