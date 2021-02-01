import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem.js";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const [ total, setTotal ] = useState()

  useEffect(() => {
    var t = 0
    const totals = cart.map( p => p.item.price * p.quantity)
    totals.map( p => t = t + p)
    setTotal(t)
}, [cart])

  return (
    <div>
      {cart.length > 0 ? (
        <h1>Compra en Urban!</h1>
      ) : (
        <>
          <h1>Aún no hay productos en el carrito</h1>
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
              onClick={() => {
                console.log(cart);
              }}
            >
              finalizar la compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
