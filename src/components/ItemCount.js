import React, {useState} from "react";


export default function ItemCount({stock,initial,onAdd}) {

  const [quantity, setQuantity] = useState(initial);

  const addProduct = () => {
    if (quantity < stock && quantity > 0) setQuantity(quantity + 1)
  };
  
  const removeProduct = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  };



  return (
    <div className="container">
      <div className="card">
        <div className="card-content grey lighten-4">
          <p>Black-Jacket Urban ({stock} en stock)</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab" onClick={addProduct}>
              <a className="active" href="#">
                <i class="small material-icons">
                  add
                </i>
              </a>
            </li>
            <li className="tab">
              <a>{quantity}</a> 
            </li>
            <li className="tab" onClick={removeProduct}>
              <a className="active" href="#">
                <i class="small material-icons" >
                  remove
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab">
              <a className={stock < 1? "btn-flat disabled":"active"} href="#" onClick={() => onAdd(quantity, stock)}>
                Agregar al carrito
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
