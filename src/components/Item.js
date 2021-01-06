import React from "react";

export default function Item({ item }) {
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
              <span className="card-title black-text text-darken-2">{item.title}</span>
            </div>
            <div className="card-content">
              <p>Precio:${item.price}</p>
            </div>
            <div className="card-action">
              <a href="#">Mas info.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
