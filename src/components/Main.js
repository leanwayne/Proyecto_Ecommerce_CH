import React from "react";
import ItemListContainer from "./ItemListContainer";
import { Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

export default function Main() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting="Bienvenido a la tienda Urban!" />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer greeting="Bienvenido a la tienda Urban!" />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </div>
  );
}
