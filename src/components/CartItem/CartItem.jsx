import React from "react";
import { CartContext, useCartContext } from "../CartContext/CartContext";
import "./CartItem.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CartItem = ({ item }) => {
  const { removeItem } = useCartContext(CartContext);

  return (
    <>
      <div className="container">
        <img className="cart-image" src={item.image} alt="" />
        <div className="content">
          <div>
            <h4 className="cart-name">{item.name}</h4>
            <p className="cart-quantity">- Cantidad: {item.quantity}</p>
            <p className="cart-cost">- Precio por unidad: $ {item.cost}</p>
            <p className="cart-subtotal">
              - Subtotal: $ {item.quantity * item.cost}
            </p>
            <DeleteOutlineIcon
              onClick={() => removeItem(item.id)}
              sx={{ marginLeft: 135, marginBottom: 2, cursor: "pointer" }}
            ></DeleteOutlineIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
