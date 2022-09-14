import React, { useState, useEffect} from 'react'
import customFetch from '../Utils/itemData/CustomFetch/CustomFetch'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import Items from "../Utils/itemData/ItemData"
import Item from "../Item/Item"



const ItemDetailContainer = () => {
  
    const [ dato, setDato] = useState({})
    const { idItem } = useParams()

  useEffect( () => {
    customFetch(2000, Items.find( item => item.id == idItem))
    .then( result => setDato(result))
    .catch( err => console.log(err))
  },  [idItem]) 
  
    return (
    <ItemDetail 
        item={dato}
    />
  )
}

export default ItemDetailContainer