import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"
import Card from 'react-bootstrap/Card';
import { Link } from "@mui/material";
// import { Link} from 'react-router-dom'

const Item = ({ id, name, image, cost, stock}) => {
  
  
    const imgStyles = {
    heigth: '350px',
    width: '100px',
   
  }

 
  const onAdd = (count) =>{
    console.log(`Compraste ${count} unidades`)
  }

  return (
      
      <Card style={{ width: '22rem', heigth: '180rem'}}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img  src={image} style={{ height: 'auto'}}/>
        <Card.Text color="primary" align="center">
        <strong className="cost">${cost}</strong>
        </Card.Text>
        <ItemCount initial={1} stock={stock} onAdd={onAdd} className="itemcount"/>
      </Card.Body>
      <Link to={`/item/${id}`}>Detalle</Link>
    </Card>
        
    )

}

export default Item