import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import Cart from './Cart';
import { CartContext } from './CartContext';

export default function ItemCount({add,remove,quantity,item,id}) {
  
  const [ open, setOpen ] = useState(false)

  const { addToCart } = useContext(CartContext)
  
  function addAndOpen(item, quantity, id){
    addToCart(item, quantity, id);
    setOpen(true)
  
  }

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
                <i className="small material-icons">add</i>
              </a>
            </li>
            <li className="tab">
              <a>{quantity}</a>
            </li>
            <li className="tab" onClick={remove}>
              <a className="active" href="#">
                <i className="small material-icons">remove</i>
              </a>
            </li>
          </ul>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab">
              {!open ? (
                <a className={item.stock < 0 ? "btn-flat disabled" : "active"}
                  href="#"
                  onClick={() => addAndOpen(item, quantity, id)}
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
