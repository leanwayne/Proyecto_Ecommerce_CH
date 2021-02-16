import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <>
      <div class="card">
        <div class="row">
          <h3 className="center-align">Bienvenido a Urban! </h3>
          <h4 className="center-align">{user.email}</h4>
          <div className="col s10 m5">
            <Link to="/">
              <div className="card-image ">
                <img
                  className="col offset-s9"
                  src="https://static.fabapp.com/2288609/08b56560ba5f373346196f90e8498d17970edb9c"
                />
              </div>
            </Link>
            <div class="card-content">
              <p>
                Bienvenido a Urban! tienda Ecommerce diseñada para el proyecto
                final de ReactJs Coder House
              </p>
            </div>
            <div class="card-action">
              <Link to="/">
                <button
                  className="waves-effect grey darken-3 white-text text-darken-2 btn-large"
                  onClick={handleLogout}
                >
                  cerrar sesion
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
