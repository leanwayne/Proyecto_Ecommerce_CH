import React from "react";
import { Link } from "react-router-dom";

export default function ItemCount({
  onAdd,
  add,
  remove,
  quantity,
  open,
  item,
}) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-content grey lighten-4">
          <p>Black-Jacket Urban ({item.stock} en stock)</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab" onClick={add}>
              <a className="active" href="#">
                <i class="small material-icons">add</i>
              </a>
            </li>
            <li className="tab">
              <a>{quantity}</a>
            </li>
            <li className="tab" onClick={remove}>
              <a className="active" href="#">
                <i class="small material-icons">remove</i>
              </a>
            </li>
          </ul>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab">
              {!open ? (
                <a className={item.stock < 1 ? "btn-flat disabled" : "active"}
                  href="#"
                  onClick={() => onAdd(item)}
                > Agregar al carrito
                </a>)
                 : (<Link to="/cart"><a>Terminar mi compra</a></Link>)
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
