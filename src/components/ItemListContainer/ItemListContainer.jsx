import React from "react";
import { useState, useEffect } from "react";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { firestoreFetch } from "../Utils/FirestoreFetch";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <div className="item-list">
      <ItemList items={datos} />
    </div>
  );
};

export default ItemListContainer;
