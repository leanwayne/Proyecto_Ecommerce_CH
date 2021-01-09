import React, {useState} from "react";
import ItemDetailContainer from "./ItemDetailContainer";

export default function Item({ item }) {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
          <div className="card-content N/A transparent">
          <p>{item.title}</p>
          </div>
            <div className="card-image">
              <img src={item.pictureUrl} />
            </div>
            <div className="card-content grey lighten-2">
              <p>Precio:${item.price}</p>
            </div>
            <div type="button" className="card-action grey darken-4" onClick={()=>{setShowDetail(!showDetail)} }>
              <a  >detalles del producto</a>
            </div>
          </div>
        </div>
      </div>
      {showDetail && <ItemDetailContainer/>}
    </>
  );
}
