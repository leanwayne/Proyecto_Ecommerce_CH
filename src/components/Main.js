import React, { Fragment } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

export default function Main() {

  return (
    <Fragment>
      <div className="container">
        <ItemListContainer greeting="Bienvenido a la tienda Urban!"/>
        
      </div>
    </Fragment>
  );
}
