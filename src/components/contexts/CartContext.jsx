import React, { useState } from "react";

export const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function isInCart(id) {
    return !!cart.find((p) => p.item.id === id);
  }

  function addToCart(item, quantity, id) {
    if (isInCart(id)) {
      const oldProduct = cart.find((p) => p.item.id === id);
      const newQuantity = oldProduct.quantity + quantity;
      const newProduct = {
        item: {
          id: oldProduct.item.id,
          title: oldProduct.item.title,
          image: oldProduct.item.image,
          price: oldProduct.item.price,
          stock: item.stock,
        },
        quantity: newQuantity,
      };
      const cartWithoutOld = cart.filter((p) => p.item.id !== id);
      const cartWithNew = [...cartWithoutOld, newProduct];
      setCart(cartWithNew);
      console.log("newproduct", newProduct);
    } else {
      const newItem = {
        item: {
          id: item.id,
          title: item.title,
          image: item.pictureUrl,
          price: item.price,
          stock: item.stock,
        },
        quantity: quantity,
      };
      setCart([...cart, newItem]);
    }
  }

  function eliminateFromCart(id) {
    const newCart = cart.filter((p) => p.item.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }
  return (
    <CartContext.Provider
      value={{ cart, addToCart, eliminateFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
