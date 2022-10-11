import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import CheckIcon from "@mui/icons-material/Check";
import { useCartContext } from "../CartContext/CartContext";
import { Button } from "@mui/material";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    alert("Seleccionaste " + quantity + " items");
    setItemCount(quantity);
    addItem(item, quantity);
    console.log(item);
  };

  return (
    <>
      {item && item.image ? (
        <div className="detail-item">
          <article className="content">
            <img src={item.image} alt="" className="detail-image" />
          </article>
          <aside className="side">
            <h1 className="name-item">{item.name}</h1>
            <br></br>
            <strong className="cost-item">ARS${item.cost}</strong>
            <h6 className="description-item">
              Descripcion: {item.description}
            </h6>

            <div className="counter">
              {itemCount === 0 ? (
                <ItemCount
                  stock={item.stock}
                  initial={itemCount}
                  onAdd={onAdd}
                />
              ) : (
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<CheckIcon />}
                  >
                    Checkout
                  </Button>
                </Link>
              )}
            </div>
          </aside>
        </div>
      ) : (
        <p>Cargando...123</p>
      )}
    </>
  );
};

export default ItemDetail;
