import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem.jsx";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const [total, setTotal] = useState();
  useEffect(() => {
    var t = 0;
    const totals = cart.map((p) => p.item.price * p.quantity);
    totals.map((p) => (t = t + p));
    setTotal(t);
  }, [cart]);

  return (
    <>
      <div className="card">
        {cart.length > 0 ? (
          <h1 className="center-align">Compra en Urban!</h1>
        ) : (
          <>
            <div className="container">
              <h3 className="center-align">
                Aún no hay productos en el carrito
              </h3>
              <div className="center">
                <Link to={"/"}>
                  <button className="waves-effect grey darken-3 white-text text-darken-2 btn-large">
                    Llevame al catalogo de compra
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
        <div className="row">
          {cart.length > 0 &&
            cart.map((product) => (
              <CartItem
                key={product.item.id}
                id={product.item.id}
                name={product.item.title}
                image={product.item.image}
                price={product.item.price}
                amount={product.quantity}
                color={product.color}
                size={product.size}
              />
            ))}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className="center-align">Precio total: ${total}</h2>
            <div className="center">
              <button
                onClick={clearCart}
                className="waves-effect grey darken-3 white-text text-darken-2 btn-large"
              >
                Limpiar el carrito
              </button>
              <Link to="/purchasePage">
                <button className="waves-effect grey darken-3 white-text text-darken-2 btn-large">
                  finalizar la compra
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Cart;
