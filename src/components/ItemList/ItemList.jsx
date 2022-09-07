import React from "react"
import { useState, useEffect } from "react"
import customFetch from "../Utils/itemData/CustomFetch/CustomFetch"
import Items from "../Utils/itemData/ItemData"
import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"
import ArañaColgante from "../../images/ArañaColgante.jpg"
import VeladorModerno from "../../images/VeladorModerno.jpg"
import "./ItemList.css"

const ItemList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
    customFetch(2000, Items)
        .then( data => setData(Items))
        .catch(err => console.log(err))
    }, []);

    return (
        <div className="container-fluid">
            {
                data.length ?
                data.map( Items => (
                    <Item
                        key={Items.id}
                        name={Items.name}
                        description={Items.description}
                        image={Items.image}
                        cost={Items.cost}
                    />

                ))
                 : <p> Cargando Datos</p>
            }
            </div>
    )
}

export default ItemList