import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ item, stock }) {
  const [quantity, setQuantity] = useState(1);

  const addProduct = () => {
    if (quantity < stock && quantity > 0) setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="col s12 m7">
        <h2 className="header">{item.title}</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src={item.pictureUrl} alt="" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h5 className="header">Descripcion: </h5>
              <p>{item.descripcion}</p>
              <h5 className="header">
                Precio: <p>${item.price}</p>
              </h5>

              <ItemCount
                add={addProduct}
                remove={removeProduct}
                item={item}
                quantity={quantity}
                id={item.id}
                setQuantity={setQuantity}
              />
              <Link to="/cart">
                <button
                  className={"blue-text text-darken-2 waves-effect btn-flat "}
                >
                  Terminar mi compra
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
