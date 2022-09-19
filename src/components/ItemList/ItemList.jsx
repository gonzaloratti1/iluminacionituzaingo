import React from 'react'
import Item from '../Item/Item'
import items from '../Utils/itemData/ItemData'


const ItemList = ({ items }) => {
  
  return (
      <>
      {
          Array.isArray(items)
          ? items.map(item => <Item key={item.id} id={item.id} title={item.name} cost={item.cost} image={item.image[0]} stock={item.stock} categoryId={item.categoryId} />)
          : <p>Cargando...</p>
      }
      
      </>
      
  );
}


export default ItemList