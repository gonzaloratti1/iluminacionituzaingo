import React, { useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreFetchOne } from "../Utils/FirestoreFetch"


const ItemDetailContainer = () => {
  
    const [ data, setData] = useState({})
    const {idItem} = useParams()


      useEffect( () => {
      firestoreFetchOne(idItem)
      .then(res => setData(res))
      .catch(err => console.log(err))
      
    }, [])


  
    return (
      <>
      <h1 className='subtitulo'>DETALLE</h1>
    <ItemDetail item={data}/>
    </> 
  )
}

export default ItemDetailContainer