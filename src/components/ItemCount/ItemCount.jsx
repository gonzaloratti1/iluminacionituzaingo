import React, { useState, useEffect } from "react";
import "./ItemCount.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, []);

  const suma = () => {
    setCount(count + 1);
  };

  const resta = () => {
    setCount(count - 1);
  };

  return (
    <div className="container-counter">
      <div className="counter">
        <Button
          disabled={count <= 1}
          onClick={resta}
          color="error"
          variant="contained"
        >
          {" "}
          -{" "}
        </Button>

        <strong className="count-item">{count}</strong>

        <Button
          variant="contained"
          disabled={count >= stock}
          onClick={suma}
          color="success"
        >
          {" "}
          +{" "}
        </Button>

        {stock && count ? (
          <Button
            variant="contained"
            color="success"
            onClick={() => onAdd(count)}
            sx={{ marginLeft: 25 }}
            startIcon={<ShoppingCartIcon />}
          >
            {" "}
            Agregar al Carrito{" "}
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: 25 }}
            startIcon={<ShoppingCartIcon />}
          >
            Agregar Al Carrito
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
