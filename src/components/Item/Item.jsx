import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Item = ({ id, name, image, cost, stock, description}) => {
  
  
  const onAdd = (count) =>{
    console.log(`Compraste ${count} unidades`)
    
  }

  return (
      
    <Card sx={{ width: 300, Height: 300, margin: 1   }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="180"
        width="180"
        image={image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" text={name}>
          <strong>$ {cost}</strong>
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




