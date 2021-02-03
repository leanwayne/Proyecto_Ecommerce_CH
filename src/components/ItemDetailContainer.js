import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestore } from "../firebaseConfig";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  console.log("items", items);
  console.log("item", item);
  console.log("id", id);

  useEffect(() => {
    const db = firestore;
    const collection = db.collection("items");
    const query = collection.doc(id).get();
    query
      .then((response) => {
        setItem({ id: response.id, ...response.data() });
      })
      .catch(() => {
        console.log("fallo");
      });
  }, [id]);

  return (
    <div>
      {item ? (
        <ItemDetail item={item} stock={item.stock} />
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
}
