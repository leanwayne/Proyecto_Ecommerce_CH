import React, { useContext } from "react";
import { CartContext } from "./contexts/CartContext";

export default function ItemCount({
  add,
  remove,
  quantity,
  item,
  id,
  size,
  color,
  setQuantity,
}) {
  const { addToCart } = useContext(CartContext);

  function addAndOpen(item, quantity, id, color, size) {
    addToCart(item, quantity, id, color, size);
    setQuantity(1);
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-content grey lighten-4">
          <p className="center-align">({item.stock} en stock)</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <button
              className="waves-effect grey darken-3 btn-large"
              onClick={add}
            >
              <i className="small material-icons white-text text-darken-2">
                add
              </i>
            </button>
            <li className="tab grey lighten-2">
              <a className={"black-text text-black"}>{quantity}</a>
            </li>
            <button
              className="waves-effect grey darken-3 btn-large"
              onClick={remove}
            >
              <i className="small material-icons white-text text-darken-2">
                remove
              </i>
            </button>
          </ul>
        </div>
        <div className="card-tabs ">
          <ul className="tabs tabs-fixed-width grey darken-3">
            <li className="tab">
              <button
                className={
                  item.stock < 1
                    ? "waves-effect btn-flat disabled"
                    : "active white-text text-darken-2 waves-effect btn-large grey darken-2"
                }
                onClick={() => addAndOpen(item, quantity, id, size, color)}
              >
                {" "}
                Agregar al carrito
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
