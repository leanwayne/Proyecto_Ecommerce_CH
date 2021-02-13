import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreAuth } from "../firebaseConfig";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const db = firestoreAuth.firestore;
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
