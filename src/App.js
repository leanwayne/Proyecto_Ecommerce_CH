import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./components/CartContext";
import {firestoreAuth} from "./firebaseConfig"
import AuthProvider from "./components/AuthContext";


function App() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const db = firestoreAuth.firestore
    const collection = db.collection("items")
    const query = collection.get()
    query
    .then(({docs})=>{
      setItems(docs.map(doc=>({id:doc.id,...doc.data()})))
    })
    .catch(()=>{
      console.log("fallo")
    })  
   },[])
  return (
    <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main items={items}/>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </AuthProvider>


  );
}
export default App;
