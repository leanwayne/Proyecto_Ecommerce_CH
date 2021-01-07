import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const itemsMock = [
    {
      id: 1,
      title: "jean negro Urban",
      price: 800,
      descripcion:'jean elastizado de la nueva coleccion Urban 2021',
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_650191-MLA31114378252_062019-O.webp",
    },
    {
      id: 2,
      title: "Remera blanca Urban",
      price: 1200,
      descripcion:'Remera al cuerpo de la nueva coleccion Urban 2021',
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_890124-MLA40362509323_012020-O.webp",
    },
    {
      id: 3,
      title: "Chaqueta negra Urban",
      price: 2600,
      descripcion:'Chaqueta de cuero de la nueva coleccion Urban 2021',
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_809543-MLA41634735796_052020-O.webp",
    },
  ];

export default function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]) 

    useEffect(()=>{
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!itemsMock.length) {
                    reject('La lista de items está vacía');
                }
                resolve(itemsMock)
            }, 2000)
        })
        getItems.then((response) => setItems(response)).catch(error => console.log(error))
    }, [itemsMock, setItems])
  
  
    let onAddToCart = (quantity, stock) => {
    stock < 1
      ? alert("no hay stock disponible de este producto!")
      : alert("se agrego " + quantity + " producto al carrito");
  };
  
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={1} onAdd={onAddToCart} />     
      <ItemList items={items} />
    </div>
  );
}
