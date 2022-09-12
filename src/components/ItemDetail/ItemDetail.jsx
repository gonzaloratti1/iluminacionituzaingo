import React from 'react'




const Items = {
        id: 1,
        name: "Lampara",
        description: "15 Watts - Luz calida - Halogena. Para Interior. Marca: OSRAM",
        cost: 1000,
        stock: 10,
        envio: "A cargo del comprador",
        image: ["https://w4v8q6r3.rocketcdn.me/wp-content/uploads/2020/01/led-top-mirror-globe-oro-95-o-14-h-425456-bombilla-la-casa-de-la-lampara-247x300.jpg", "https://casaasdi.com.ar/wp-content/uploads/2021/02/Lamapara-STOP-MARCHA-ATRAS-P21w-12V.jpg"],
        sales: 5,
          createdAt: "2022-08-15T05:11:04.952Z",
          updatedAt: "2022-08-15T05:11:05.347Z",
          categoryId: 9,
          brandId: 95,
          packingId: null,
          category: {
            name: "Interior",
            id: 1
          },
          brand: {
            id: 95,
            name: "OSRAM"
          },
          reviews: []
        }

const ItemDetail = ({data}) => {

    return (
    <div>
        <div className='detail'>
            <div className='description'>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <img src={data.image[1]}></img>
           <strong className='cost'>${data.cost}</strong>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail