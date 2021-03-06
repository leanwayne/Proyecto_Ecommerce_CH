import React from "react";
import ItemListContainer from "./layouts/ItemListContainer";
import { Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./layouts/Cart";
import LoginPage from "./layouts/LoginPage";
import Home from "./layouts/Home";
import PurchasePage from "./layouts/purchasePage";

export default function Main({ items }) {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <ItemListContainer
            greeting="Bienvenido a la tienda Urban!"
            items={items}
          />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer
            greeting="Bienvenido a la tienda Urban!"
            items={items}
          />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/LoginPage">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/purchasePage">
          <PurchasePage />
        </Route>
      </Switch>
    </div>
  );
}
