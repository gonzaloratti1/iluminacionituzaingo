import React from "react"
import { useState, useEffect } from "react"
import customFetch from "../Utils/itemData/CustomFetch/CustomFetch"
import Items from "../Utils/itemData/ItemData"
import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
    customFetch(1, Items)
        .then( data => setData(Items))
        .catch(err => console.log(err))
    }, []);

    return (
        <div className="item-list">
            {
                data.length ?
                data.map( Items => (
                    <Item
                        key={Items.id}
                        name={Items.name}
                        description={Items.description}
                        image={Items.image}
                        cost={Items.cost}
                        stock={Items.stock}
                    />

                ))
                 : <p> Cargando Datos</p>
            }
            </div>
    )
}

export default ItemList