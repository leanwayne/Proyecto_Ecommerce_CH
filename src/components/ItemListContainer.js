import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
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
    initial: 1,
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
    initial: 1,
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
    initial: 1,
    categoryId: "camperas",
  },
];

export default function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!itemsMock.length) {
          reject("La lista de items está vacía");
        }
        resolve(itemsMock);
      }, 2000);
    });
    getItems
      .then((response) => setItems(response))
      .catch((error) => console.log(error));
  }, [itemsMock]);

  return (
    <div>
      <h1>{greeting}</h1>
      {!items.length ? (
        <h2>Loading...</h2>
      ) : (
        <ItemList
          items={categoryId ? items.filter((item) => item.categoryId === categoryId) : items}
        />
      )}
    </div>
  );
}
