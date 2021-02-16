import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ item, stock }) {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("cualquier color");
  const [size, setSize] = useState("cualquier talle");

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
              <h6 className="header">
                Talle:{" "}
                <button
                  onClick={() => setSize("x")}
                  className={
                    "btn-floating btn-small waves-effect waves-light grey"
                  }
                >
                  <i>x</i>
                </button>
                <button
                  onClick={() => setSize("l")}
                  className={
                    "btn-floating btn-small waves-effect waves-light grey"
                  }
                >
                  <i>l</i>
                </button>
                <button
                  onClick={() => setSize("m")}
                  className={
                    "btn-floating btn-small waves-effect waves-light grey"
                  }
                >
                  <i>m</i>
                </button>
                <button
                  onClick={() => setSize("s")}
                  className={
                    "btn-floating btn-small waves-effect waves-light grey"
                  }
                >
                  <i>s</i>
                </button>
              </h6>
              <h6 className="header">
                Color:{" "}
                <button
                  onClick={() => setColor("marron")}
                  className={
                    "btn-floating btn-small waves-effect brown darken-3"
                  }
                />
                <button
                  onClick={() => setColor("blanco")}
                  className={
                    "btn-floating btn-small waves-effect grey lighten-5"
                  }
                />
                <button
                  onClick={() => setColor("negro")}
                  className={
                    "btn-floating btn-small waves-effect grey darken-4"
                  }
                />
              </h6>
              <ItemCount
                add={addProduct}
                remove={removeProduct}
                item={item}
                quantity={quantity}
                id={item.id}
                size={size}
                color={color}
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
