import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { firestoreAuth } from "../../firebaseConfig";
import { Link } from "react-router-dom";

export default function Home() {
  const { user, handleLogout } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const db = firestoreAuth.firestore;
    const collection = db.collection("orders");
    const query = collection.get();
    query.then(({ docs }) => {
      setOrders(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);
  console.log("orders", orders);

  return (
    <>
      <div class="card">
        <div class="row">
          <h3 className="center-align">Bienvenido a Urban! </h3>
          <h4 className="center-align">{user.email}</h4>
          <div className="col s10 m5">
            <div className="card-image ">
              <img
                className="col offset-s9"
                src="https://static.fabapp.com/2288609/08b56560ba5f373346196f90e8498d17970edb9c"
              />
            </div>
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
