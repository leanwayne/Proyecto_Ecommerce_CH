import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="grey darken-3 page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Urban</h5>
            <p className="grey-text text-lighten-4">
              Bienvenido a Urban! tienda Ecommerce diseñada para el proyecto
              final de ReactJs Coder House
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Navegacion</h5>
            <ul>
              <li>
                <NavLink to="/category/remeras">
                  <a className="grey-text text-lighten-3">Remeras</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/category/camperas">
                  <a className="grey-text text-lighten-3">Camperas</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/category/jeans">
                  <a className="grey-text text-lighten-3">Jeans</a>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2021 Urban</div>
      </div>
    </footer>
  );
}
