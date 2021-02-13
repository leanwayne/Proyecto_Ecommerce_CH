import React, {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom' 
import M from 'materialize-css'
import LogInBtn from './LogInBtn'
function NavBar() {

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems,{});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {});
    });

  }, [])


  
  return (
    <>
        <ul id="dropdown1" className="dropdown-content">
          <li><NavLink to="/category/remeras">Remeras</NavLink></li>
          <li><NavLink to="/category/camperas">Camperas</NavLink></li>
          <li><NavLink to="/category/jeans">Jeans</NavLink></li>
          <li className="divider"></li>
        </ul>
        <nav>
            <div className="nav-wrapper grey darken-3">
              <NavLink to={"/"}><a className="brand-logo">Urban</a></NavLink>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><NavLink to="/category/remeras">Remeras</NavLink></li>
                  <li><NavLink to="/category/camperas">Camperas</NavLink></li>
                  <li><NavLink to="/category/jeans">Jeans</NavLink></li>
                  <li><a className="dropdown-trigger" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                  <LogInBtn/>      
                  <CartWidget/>
              </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
              <li><NavLink to="/category/remeras">Remeras</NavLink></li>
              <li><NavLink to="/category/camperas">Camperas</NavLink></li>
              <li><NavLink to="/category/jeans">Jeans</NavLink></li>
        </ul>
    </>
  );
}

export default NavBar;