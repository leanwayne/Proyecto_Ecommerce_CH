import React, { Fragment, useState } from "react";
import ItemListContainer from "./ItemListContainer";

export default function Main() {

  return (
    <Fragment>
      <div className="container">
        <ItemListContainer greeting="Bienvenido a la tienda Urban!" />
      </div>
    </Fragment>
  );
}
