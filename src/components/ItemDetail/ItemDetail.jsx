import React from 'react'


const ItemDetail = ({ item}) => {

    return (

    <>
        {
            item && item.image 
            ?
            <div>
                <div className='detail'>
                    <div className='description'>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <img src={item.image}></img>
                        <strong className='cost'>${item.cost}</strong>
                    </div>
                </div>
            </div>
            :
            <p>Cargando...</p>
        }
    </>
  
    )
}

export default ItemDetail



