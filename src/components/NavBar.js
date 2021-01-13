import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom' 


function NavBar() {
  return (
    <>
        <nav>
            <div className="nav-wrapper grey darken-3">
            <NavLink to={"/"}><a className="brand-logo">Urban</a></NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/category/remeras">Remeras</NavLink></li>
                <li><NavLink to="/category/camperas">Camperas</NavLink></li>
                <li><NavLink to="/category/jeans">Jeans</NavLink></li>
                <CartWidget/>
            </ul>
            </div>
        </nav>
    </>
  );
}

export default NavBar;