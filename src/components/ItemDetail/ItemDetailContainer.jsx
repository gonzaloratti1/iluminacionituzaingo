import React, { useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreFetchOne } from "../Utils/FirestoreFetch"
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  
    const [ data, setData] = useState({})
    const {idItem} = useParams()


      useEffect( () => {
      firestoreFetchOne(idItem)
      .then(res => setData(res))
      .catch(err => console.log(err))
      
    }, [])

    console.log(idItem)
    //  useEffect(() => {
    //     firestoreFetch(idCategory)
    //     .then(result => setDatos(result))
    //     .catch(err => console.log(err))
    // }, [idCategory]);

  // useEffect( () => {
  //   customFetch(1, Items.find( item => item.id == idItem))
  //   .then( result => setDato(result))
  //   .catch( err => console.log(err))
  // },  [idItem]) 
  
    return (
      
    <ItemDetail item={data}/>
      
  )
}

export default ItemDetailContainer