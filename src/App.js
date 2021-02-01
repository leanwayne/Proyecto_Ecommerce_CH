import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./components/CartContext";
import {firestore} from "./firebaseConfig"

function App() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const db = firestore
    const collection = db.collection("items")
    const query = collection.get()
    query
    .then((resultado)=>{
      const itemsArray = resultado.docs 
      const productos = itemsArray.map(item=>{
        const productoFinal = {
          id : item.id,
          ...item.data()
        }
       return productoFinal;
      })
      setItems(productos)
    })
    .catch(()=>{
      console.log("fallo")
    })  
   },[])
 
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main items={items}/>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
