import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem.js";

function Cart() {
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div>
      {cart.length > 0 ? (
        <h1>Compra en Urban!</h1>
      ) : (
        <>
          <h1>Aún no hay productos en el carrito</h1>
          <Link to={"/"}>
            <button onClick={clearCart}>Llevame al catalogo de compra</button>
          </Link>
        </>
      )}

      <div>
        {cart.length > 0 &&
          cart.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              name={product.title}
              image={product.image}
              price={product.price}
              amount={product.amount}
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
