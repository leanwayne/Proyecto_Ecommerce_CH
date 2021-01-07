import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
const itemMock = {id: 3,
    title: "Chaqueta negra Urban",
    price: 2600,
    descripcion:'Chaqueta de cuero de la nueva coleccion Urban 2021',
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_809543-MLA41634735796_052020-O.webp",
  }

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]) 

    useEffect(()=>{
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {              
                resolve(itemMock)
            }, 2000)
        })
        getItem.then((response) => setItem(response)).catch(error => console.log(error))
    }, [itemMock, setItem])
   
  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  );
}
