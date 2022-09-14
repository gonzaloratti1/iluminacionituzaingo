import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, NavLink } from 'react-router-dom'
import { Button } from "bootstrap";
import { Navbar, Nav, Form, FormControl, NavItem } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

const Item = ({ id, name, image, cost, stock}) => {
  
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
      <Nav.Link href={`/item/${id}`}>Detalles</Nav.Link>
    </Card>
        
    )

}

export default Item

// 


