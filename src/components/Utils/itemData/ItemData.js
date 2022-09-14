
const Items = [
{
    id: 1,
    name: "Lampara",
    description: "15 Watts - Luz calida - Halogena. Para Interior. Marca: ABCDEFG",
    cost: 1000,
    stock: 4,
    image: [
      "https://w4v8q6r3.rocketcdn.me/wp-content/uploads/2020/01/led-top-mirror-globe-oro-95-o-14-h-425456-bombilla-la-casa-de-la-lampara-247x300.jpg"
    ],
    sales: 5,
    createdAt: "2022-08-15T05:11:04.952Z",
    updatedAt: "2022-08-15T05:11:05.347Z",
    categoryId: "10",
    brandId: 95,
    packingId: null,
    brand: {
      id: 95,
      name: "Interelec"
      
    },
}, 
{
    id: 3,
    name: "Velador",
    description: "40 Watts - Luz calida - Halogena. Para Interior.",
    cost: 2500,
    stock: 11,
    image: ["https://d2r9epyceweg5n.cloudfront.net/stores/935/994/products/nurvi-velador1-251ecfe28f84b2f74715487814989602-640-0.png"],
      sales: 0,
      createdAt: "2022-08-15T05:11:04.952Z",
      updatedAt: "2022-08-15T05:11:05.347Z",
      categoryId: "3",
      brandId: 43,
      packingId: null,
        brand: {
          id: 2,
          name: "Faroluz"
         },
         reviews: []
},
{
    id: 4,
    name: "Araña",
    description: "50 Watts - Luz Fria - Halogena. Para Interior",
    cost: 10000,
    stock: 5,
    image: ["https://http2.mlstatic.com/D_NQ_NP_723227-MLA31660085056_082019-O.jpg"],
    sales: 3,
    createdAt: "2022-08-15T05:11:04.952Z",
    updatedAt: "2022-08-15T05:11:05.347Z",
    categoryId: "2",
    brandId: 25,
    packingId: null,
            brand: {
              id: 32,
              name: "Faroluz"
              },
              reviews: []
             },
{
    id: 5,
    name: "Velador de madera",
    description: "20 Watts - Luz calida - Halogena. Para Interior. Marca: ABCDEFG",
    cost: 12000,
    stock: 13,
    image: ["https://rwiluminacion.com/wp-content/uploads/2021/08/Lampara-Velador-Nordico.jpg"],
    sales: 3,
    createdAt: "2022-08-15T05:11:04.952Z",
    updatedAt: "2022-08-15T05:11:05.347Z",
    categoryId: "3",
    brandId: 25,
    packingId: null,
    category: {
    name: "Interior",
    id: 2
    },
    brand: {
    id: 12,
    name: "Antares"
    },
    reviews: []
},
{
    id: 6,
    name: "Colgante",
    description: "20 Watts - Luz calida - Halogena. Para Interior. Marca: ABCDEFG",
    cost: 5000,
    stock: 20,
    image: ["https://http2.mlstatic.com/D_NQ_NP_794488-MLA43109497034_082020-B.jpg"],
    sales: 3,
    createdAt: "2022-08-15T05:11:04.952Z",
    updatedAt: "2022-08-15T05:11:05.347Z",
    categoryId: "3",
    brandId: 25,
    packingId: null,
    category: {
      name: "Exterior",
      id: 3
          },
            brand: {
                  id: 2,
                        name: "Faroluz"
                      },
                      reviews: []
},
{
    id: 7,
    name: "Spot de Embutir",
    description: "20 Watts - Luz Fria",
    cost: 5000,
    stock: 20,
    image: ["https://http2.mlstatic.com/D_NQ_NP_878335-MLA42087971472_062020-O.webp"],
    sales: 0,
    reatedAt: "2022-08-15T05:11:04.952Z",
    updatedAt: "2022-08-15T05:11:05.347Z",
    categoryId: "2",
     brandId: 25,
     packingId: null,
    category: {
              name: "Exterior",
              id: 4
                   },
                  brand: {
                          id: 2,
                          name: "Candil"
                          },
                          reviews: []
}, 
{
    id: 8,
    name: "Aplique de Pared",
    description: "20 Watts - Luz calida ",
    cost: 1000,
    stock: 10,
    image: ["https://http2.mlstatic.com/D_NQ_NP_739683-MLA43909708123_102020-O.webp"],
    sales: 3,
    createdAt: "2022-08-15T05:11:04.952Z",
    updatedAt: "2022-08-15T05:11:05.347Z",
    categoryId: "2",
    brandId: 25,
    packingId: null,
      category: {
              name: "Exterior",
              id: 4
                  },
                  brand: {
                        id: 12,
                        name: "Faroluz"
                            },
                            reviews: []
},
{
    id: 9,
    name: "Embutido de pared",
    description: "120 Watts - Luz Fria ",
    cost: 13000,
    stock: 4,
    image: ["https://http2.mlstatic.com/D_NQ_NP_941834-MLA48688338527_122021-C.jpg"],
    sales: 3,
    createdAt: "2022-08-15T05:11:04.952Z",
    updatedAt: "2022-08-15T05:11:05.347Z",
    categoryId: "2",
    brandId: 25,
    packingId: null,
     category: {
                name: "Exterior",
                id: 4
                },
                  brand: {
                          id: 12,
                          name: "Antares"
                          },
                            reviews: []
                                },
  {
    id: 10,
    name: "Lampara Calida",
    description: "40 Watts - Luz calida - Halogena. Para Interior.",
    cost: 2500,
    stock: 9,
    image: ["https://cdn.bpsolucioneselectricas.com.ar/uploads/1599747386_V2laX0ZJTEFNRU5UX1NUNjRfRElNTUFCTEVfOTI5MDAyNDE1NzEyX0ltYWdlXzEtMTIuanBn.jpg"],
      sales: 0,
      createdAt: "2022-08-15T05:11:04.952Z",
      updatedAt: "2022-08-15T05:11:05.347Z",
      categoryId: "10",
      brandId: 43,
      packingId: null,
        brand: {
          id: 2,
          name: "Faroluz"
         },
         reviews: []
},
                              ]

























// {
//     id: 2,
//     name: "Farol",
//     description: "20 Watts - Luz calida - Halogena - Para exterior. Marca: ABCDEFGHI",
//     image: "https://www.matelec.com.ar/4284-large_default/farol-venezia-soporte-superior-fabierto-negro-fuinyter.jpg",
//     cost: 1,
//     stock: 10
// },
// {
//     id: 3,
//     name: "Araña",
//     description: "",
//     image: "https://mla-s1-p.mlstatic.com/767201-MLA42010986828_052020-C.jpgg",
//     cost: 1,
//     stock: 10
// },
// {
//     id: 4,
//     name: "Velador",
//     description: "Para escritorio - Luz Calida - 15 Watts - Para interior - Marca: SJKDASD",
//     image: "https://iluminacion.com.ar/Image/0/600_750-lds_ve3510-01cr_1.jpg",
//     cost: 1,
//     stock: 10
// },
// {
//     id: 5,
//     name: "Araña Colgante",
//     description: "Luz Calida - 20 Watts- Para interior - Marca:SADASDA",
//     image: "https://m.media-amazon.com/images/I/710cflC1ytL._AC_SS450_.jpg",
//     cost: 1,
//     stock: 10
// },
// {
//     id: 6,
//     name: "Farol",
//     description: "Luz Fria-  20 Watts - Para exterior - Marca: SAKDJAS",
//     image: "https://distlaalemana.com.ar/wp-content/uploads/2014/11/7576.jpg",
//     cost: 1,
//     stock: 10
// },
// {
//     id: 7,
//     name: "Spot",
//     description: "Luz Fria - 25 Watts - Para pared - Marca: HGSAJDHAS",
//     image: "https://img2.freepng.es/20180605/xao/kisspng-lighting-light-fixture-spot-electric-light-5b1714d55ca583.1973870215282393173795.jpg",
//     cost: 1,
//     stock: 10
// },
// {
//     id: 8,
//     name: "Lampara Rustica",
//     description: "Luz Calida - 30 Watts - Para Interior - Marca: ASDF",
//     image: "https://http2.mlstatic.com/D_NQ_NP_763640-MLA44342551232_122020-W.jpg",
//     cost: 1,
//     stock: 10
// },
// {
//     id: 9,
//     name: "Velador ",
//     description: "Luz Calida - 20 Watts- Para interior - Marca:SADASDA",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkn4BWxp0NrQ2idjJrdS7UfOkVrXAWfmjV7qk7pzdoR7DjSJwCnAZ9a83K_s-mdmEqx0&usqp=CAU",
//     cost: 1,
//     stock: 10
// },
// {
//     id: 10,
//     name: "Araña Colgante",
//     description: "Luz Calida - 30 Watts - Para interior - Marca: asasf",
//     image: "https://i.pinimg.com/originals/0c/88/37/0c88379ca5a8dbd5307180b57f9877e6.jpg",
//     cost: 1,
//     stock: 10
// }


export default Items