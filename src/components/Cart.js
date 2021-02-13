import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem.js";
import firebase from "firebase"
import {firestoreAuth} from "../firebaseConfig"

function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const [ total, setTotal ] = useState()
  const [nombre,setNombre] = useState("")
  const [telefono,setTelefono] = useState("")
  const [email,setEmail] = useState("")
  const [id,setId] = useState("")
  const [ open, setOpen ] = useState(false)
  useEffect(() => {
    var t = 0
    const totals = cart.map( p => p.item.price * p.quantity)
    totals.map( p => t = t + p)
    setTotal(t)
}, [cart])
const manejarCompra = (e) => {
  e.preventDefault()
  const orden = {
      buyer : {nombre,telefono,email},
      items : cart,
      date : firebase.firestore.Timestamp.fromDate(new Date()),
      total : total
  }
   const db = firestoreAuth.firestore
   const collection = db.collection("orders")

   collection
   .add(orden)
   .then((response)=>{
       setId(response.id)
       const collection = db.collection("items")
       const bache = firestoreAuth.firestore.batch()
       cart.forEach(item=>{
           bache.update(collection.doc(item.item.id),{stock: item.item.stock -item.quantity})
       })
       bache
       .commit()
       .then((r)=>{
           console.log(r)
           console.log("Estuvo todo el bache bien!")
       })
       .catch(err=>{
           console.log("Hubo un error en ",err)
       })
   })
   .catch((err)=>{
       console.log(err)
   })
    clearCart()
}
  return (
    <div>
      {cart.length > 0 ? (
        <h1>Compra en Urban!</h1>
      ) : (
        <>
          <h1>Aún no hay productos en el carrito</h1>
          {id? <p>Orden confirmada! Nro de orden {id}</p> : null}
          <Link to={"/"}>
            <button>Llevame al catalogo de compra</button>
          </Link>
        </>
      )}
      <div>
        {cart.length > 0 &&
          cart.map((product) => (
            <CartItem
              key={product.item.id}
              id={product.item.id}
              name={product.item.title}
              image={product.item.image}
              price={product.item.price}
              amount={product.quantity}
            />
          ))}
      </div>
      {cart.length > 0 && (
        <>
          <h2>${total}</h2>
          <div>
            <button onClick={clearCart}>Limpiar el carrito</button>
            <button
              onClick={() => 
                setOpen(true)  
              }
            >
              finalizar la compra
            </button>
            {open ? (
            <>
              <h2>Ya casi es tuyo!</h2>
              <p>Completa los datos de compra</p>
              <form onSubmit={manejarCompra}>
                  <div>
                      <input onChange={e=>setNombre(e.target.value)} type="text" placeholder="nombre" value={nombre} />
                  </div>
                  <div>
                      <input onChange={e=>setTelefono(e.target.value)} type="tel" placeholder="Telefono" value={telefono}/>
                  </div>
                  <div>
                      <input onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" value={email}/>
                  </div>
                  <button>Comprar</button>
              </form>
            </>): null}
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;
