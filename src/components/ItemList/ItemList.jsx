import React from 'react'
import Item from '../Item/Item'
import Items from '../Utils/itemData/ItemData'
import { useState, useEffect } from 'react'
import customFetch from '../Utils/itemData/CustomFetch/CustomFetch'

const ItemList = ({ items }) => {
  return (
      <>
      {
          Items.length > 0
          ? Items.map(item => <Item key={item.id} id={item.id} title={item.name} cost={item.cost} image={item.image[0]} stock={item.stock} />)
          : <p>Cargando...</p>
      }
      </>
  );
}


export default ItemList