import React, { Fragment } from 'react'
import 'materialize-css/dist/css/materialize.min.css'


function NavBar() {
  return (
    <Fragment>
        <nav>
            <div className="nav-wrapper grey darken-3">
            <a href="#" className="brand-logo">Urban</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="https://www.google.com/">Remeras</a></li>
                <li><a href="https://www.google.com/">Accesorios</a></li>
                <li><a href="chttps://www.google.com/">Jeans</a></li>
            </ul>
            </div>
        </nav>
    </Fragment>
  );
}

export default NavBar;