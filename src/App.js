import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import CartProvider from './components/CartContext';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
