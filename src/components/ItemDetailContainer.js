import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const itemsMock = [
  {
    id: "1",
    title: "jean negro Urban",
    price: 800,
    descripcion: "jean elastizado de la nueva coleccion Urban 2021",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_650191-MLA31114378252_062019-O.webp",
    stock: 6,
    categoryId: "jeans",
  },
  {
    id: "2",
    title: "Remera blanca Urban",
    price: 1200,
    descripcion: "Remera al cuerpo de la nueva coleccion Urban 2021",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_890124-MLA40362509323_012020-O.webp",
    stock: 12,
    categoryId: "remeras",
  },
  {
    id: "3",
    title: "Chaqueta negra Urban",
    price: 2600,
    descripcion: "Chaqueta de cuero de la nueva coleccion Urban 2021",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_809543-MLA41634735796_052020-O.webp",
    stock: 5,
    categoryId: "camperas",
  },
];

export default function ItemDetailContainer() {
  const [item, setItem] = useState();
  const {id} = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsMock.find(item => item.id === id));
      }, 2000);
    });
    getItem
      .then((response) => setItem(response))
      .catch((error) => console.log(error));
  }, [id]);

  console.log(item)

  return (
    <div>
      {item ? <ItemDetail item={item} initial={1}/> : <h2>Loading..</h2>}
    </div>
  );
}
