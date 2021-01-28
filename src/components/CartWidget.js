import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext'



export default function CartWidget() {
  const { cart } = useContext(CartContext)
  const [ cartNum, setCartNum ] = useState(0)
  
  let cartItemsNums = cart.map(item =>{  
    return item.amount
  })
  
  useEffect(()=>{
    setCartNum(cartItemsNums.reduce((a, b)=> a + b,0)) 
  },[cartItemsNums])

 

  console.log("cartNum", cartNum )

  return (
    <li>
      <Link to="/cart"><a className="large material-icons">shopping_cart</a></Link>
      { cartNum>0 && <a className="red darken-2 btn-floating btn-small halfway-fab waves-effect waves-light red"><i>{cartNum}</i></a>}
    </li>
    
  );
}
