import React from "react";
import ItemListContainer from "./ItemListContainer";
import { Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart"

export default function Main({items}) {

  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting="Bienvenido a la tienda Urban!" items={items} />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer greeting="Bienvenido a la tienda Urban!" items={items}/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer items={items} />
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>    
      </Switch>
    </div>
  );
}
