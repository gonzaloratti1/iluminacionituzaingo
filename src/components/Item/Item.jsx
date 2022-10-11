import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Item.css";

const Item = ({ id, item, name, image, cost, stock, description }) => {
  return (
    <Card sx={{ width: 275, height: 400, margin: 1 }}>
      <NavLink to={`/item/${id}`}>
        <CardActionArea>
          <CardMedia component="img" image={image} alt="" height="325" />

          <Container className="container">
            <CardContent>
              <Typography variant="h5" color="black">
                $ {cost}
              </Typography>
            </CardContent>
          </Container>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary">
            <Typography
              color="black"
              component="div"
              sx={{
                textDecoration: "none",
                textDecorationLine: "none",
                color: "black",
              }}
            >
              {name}
            </Typography>
          </Button>
        </CardActions>
      </NavLink>
    </Card>
  );
};

export default Item;
