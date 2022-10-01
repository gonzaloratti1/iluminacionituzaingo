import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ items }) => {
  
  return (
      <>
      {
         items.length > 0
          ? items.map(item => <Item key={item.id} id={item.id} title={item.name} cost={item.cost} image={item.image} stock={item.stock} categoryId={item.categoryId} />)
          : <p>Cargando...</p>
      }
      
      </>
      
  );
}


export default ItemList