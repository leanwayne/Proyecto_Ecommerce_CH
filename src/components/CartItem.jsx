import React, { useContext } from "react";
import { CartContext } from "./contexts/CartContext";

function CartItem({ id, name, image, price, amount, size, color }) {
  const { eliminateFromCart } = useContext(CartContext);
  return (
    <>
      <div className="col s12 m7">
        <div className="card-content">
          <div className="divider"></div>
          <div className="card-image col s4">
            <img src={image} alt={name} />
          </div>
          <div>
            <h5>{name}</h5>
          </div>
          <div>
            <h6>Precio: ${price}</h6>
          </div>
          <div>
            <h6>
              cantidad:{amount} color: {color} talle: {size}
            </h6>
          </div>
          <button
            className="waves-effect grey darken-3 white-text text-darken-2 btn-small"
            onClick={() => eliminateFromCart(id)}
          >
            Quitar del carrito
          </button>
          <div className="divider"></div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
