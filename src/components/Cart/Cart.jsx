import React from "react";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import "./Cart.css";

const Cart = () => {
  const { cartList, clear, totalPrice } = useContext(CartContext);

  if (cartList.length === 0) {
    return (
      <>
        <Typography variant="h3" sx={{ marginTop: 5, marginLeft: 80 }}>
          No hay elementos en el carrito
        </Typography>
        <Link to="/">
          <Button
            sx={{ backgroundColor: "yellow", marginTop: 10, marginLeft: 110 }}
            variant="text"
          >
            <Typography color="black">Seguir comprando</Typography>
          </Button>
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="container-buttons">
        <Link to="/">
          <Button sx={{ marginLeft: 3 }} variant="contained" color="primary">
            Seguir Comprando
          </Button>
        </Link>
        <h1 className="title">Carrito de compras</h1>
        <Button
          key="1"
          onClick={clear}
          className="borrar-articulos"
          variant="contained"
          color="error"
        >
          Borrar Articulos
        </Button>
      </div>

      <div>
        {cartList.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <hr />
      <div className="container-confirm">
        <h6 className="total-price">Total: ${totalPrice()}</h6>
        <Link to="/checkout">
          <Button
            variant="contained"
            color="success"
            sx={{
              display: "inline-block",
              marginLeft: 100,
              marginRight: 50,
              marginBottom: 10,
            }}
          >
            Finalizar compra
          </Button>
        </Link>
      </div>
    </>
  );
};
export default Cart;
