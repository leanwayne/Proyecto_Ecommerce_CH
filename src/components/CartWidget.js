import React from "react";
import { Link } from "react-router-dom";



export default function CartWidget() {
  return (
    <li>
     <Link to="/cart"><a className="large material-icons">shopping_cart</a></Link>
    </li>
  );
}
