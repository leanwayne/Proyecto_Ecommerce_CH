import React, { useState } from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item, stock }) {
  const [quantity, setQuantity] = useState(item.initial);

  const [cart, setCart] = useState([]);

  const [open, setOpen] = useState(false);

  const addProduct = () => {
    if (quantity < stock && quantity > 0) setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  let onAddToCart = (product) => {
    stock < 1
      ? alert("no hay stock disponible de este producto!")
      : alert("se agrego " + quantity + " producto al carrito");
    setCart(...cart, {
      id: product.id,
      title: product.title,
      pictureUrl: product.pictureUrl,
      quantity: quantity,
    });
    setOpen(true);
    console.log(cart);
  };
  return (
    <>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-content grey lighten-4">
              <p>{item.title}</p>
            </div>
            <div className="card-image">
              <img src={item.pictureUrl} />
              <span className="card-title black-text text-darken-2">
                {item.title}
              </span>
            </div>
            <div className="card-content">
              <p>Precio:${item.price}</p>
            </div>
            <div className="card">
              <a>{item.descripcion}</a>
            </div>
          </div>
        </div>
      </div>
      <ItemCount
        add={addProduct}
        remove={removeProduct}
        onAdd={onAddToCart}
        item={item}
        quantity={quantity}
        open={open}
      />
    </>
  );
}
