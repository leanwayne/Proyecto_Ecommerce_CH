import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    setCartNum(
      cart
        .map((item) => item.quantity)
        .reduce((total, amount) => total + amount, 0)
    );
  }, [cart, setCartNum]);

  return (
    <li>
      <Link to="/cart">
        <a className="large material-icons">shopping_cart</a>
      </Link>
      {cartNum > 0 && (
        <a className="red darken-2 btn-floating btn-small halfway-fab waves-effect waves-light red">
          <i>{cartNum}</i>
        </a>
      )}
    </li>
  );
}
