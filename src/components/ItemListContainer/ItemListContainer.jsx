import React from "react"
import { useState, useEffect } from "react"
import customFetch from "../Utils/itemData/CustomFetch/CustomFetch"
import Item from "../Item/Item"
import "./ItemList.css"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemList from "../ItemList/ItemList"


const  {Items} = require('../Utils/itemData/ItemData')


const ItemListContainer = () => {

    const [data, setData] = useState([])
    const { idCategory } = useParams()

    
    useEffect( () =>{
        if (idCategory){
            customFetch(2000, Items.filter( item => item.categoryId  == idCategory))
            .then( result => setData(result))
            .catch( err =>  console.log(err))  
        } else{
        customFetch(2000, Items)
        .then( result => setData(result))
        .catch( err =>  console.log(err))  
        }
    }, [ idCategory])
   

    const onAdd = (quantity) => {
        alert("Has seleccionado" + quantity + "items")
    }

    return (
    <>
        <ItemList items={data} />
    </>
    )
}

export default ItemListContainer