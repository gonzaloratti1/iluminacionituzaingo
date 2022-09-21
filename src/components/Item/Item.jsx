import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';
import Items from '../Utils/itemData/ItemData';
import CartContextProvider from '../CartContext/CartContext';
import { CartContext } from '../CartContext/CartContext';
import { NavLink } from 'react-router-dom';


const Item = ({ id, name, image, cost, stock, description}) => {
  
  const textUsd = {
    color: "green",
}
  
  const onAdd = (count) =>{
    console.log(`Compraste ${count} unidades`)
    
  }

  const cardClasses = {
    item:{
      minWidth: "600px",
      margin: "4em",
      boxSizing: "border-box"
    }
  }

  return (
      
    <Card sx={{ maxWidth: 500 }}>
         <Typography gutterBottom variant="h5" component="div" text={name}>
          <h3>{name}</h3>
        </Typography>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" text={name}>
          <strong>$ {cost}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>

    <NavLink to={`/item/${id}`} ><Button size="medium" color="primary">
        DETALLES
      </Button></NavLink>  
    </CardActions>
  </Card>
    )

}

export default Item




