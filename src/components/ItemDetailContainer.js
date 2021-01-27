import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer({items}) {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      resolve(items.find((item) => item.id === id));
    });
    getItem
      .then((response) => setItem(response))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail item={item} stock={item.stock}/> : <h2>Loading..</h2>}
    </div>
  );
}
