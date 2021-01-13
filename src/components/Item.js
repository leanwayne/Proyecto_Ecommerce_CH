import React, {useState} from "react";
import { Router } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import {Link} from 'react-router-dom';

export default function Item({item}) {
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
              <a><Link to={'/item/' + item.id}>detalles del producto</Link></a>
            </div>
          </div>
        </div>
      </div>
      {showDetail && <ItemDetailContainer/>}
    </>
  );
}
