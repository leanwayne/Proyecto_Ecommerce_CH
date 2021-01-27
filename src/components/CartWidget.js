import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext'



export default function CartWidget() {
  const { quantity } = useContext(CartContext)
  return (
    <li>
      <Link to="/cart"><a className="large material-icons">shopping_cart</a></Link>
      { quantity>0 && <a className="red darken-2 btn-floating btn-small halfway-fab waves-effect waves-light red"><i>{quantity}</i></a>}
    </li>
    
  );
}
