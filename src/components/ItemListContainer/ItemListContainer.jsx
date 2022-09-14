import React from "react"
import { useState, useEffect } from "react"
import customFetch from "../Utils/itemData/CustomFetch/CustomFetch"
import "./ItemList.css"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Items from "../Utils/itemData/ItemData"
import Item from "../Item/Item"

const ItemListContainer = () => {

    const [datos, setDatos] = useState([])
    const { idCategory } = useParams()



    useEffect(() => {
        customFetch(2000, Items.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === idCategory
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);


    console.log(datos)

    return (
    <>
        <ItemList items={datos} />
    </>
    )
}

export default ItemListContainer