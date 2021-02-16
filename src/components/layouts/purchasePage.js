import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import firebase from "firebase";
import { firestoreAuth } from "../../firebaseConfig";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function PurchasePage() {
  const { user } = useContext(AuthContext);
  const { cart, clearCart } = useContext(CartContext);
  const [total, setTotal] = useState();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [id, setId] = useState("");
  const userEmail = user.email;

  useEffect(() => {
    var t = 0;
    const totals = cart.map((p) => p.item.price * p.quantity);
    totals.map((p) => (t = t + p));
    setTotal(t);
  }, [cart]);

  const manejarCompra = (e) => {
    e.preventDefault();
    const orden = {
      buyer: { nombre, telefono, userEmail },
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    };
    const db = firestoreAuth.firestore;
    const collection = db.collection("orders");

    collection
      .add(orden)
      .then((response) => {
        setId(response.id);
        const collection = db.collection("items");
        const bache = firestoreAuth.firestore.batch();
        cart.forEach((item) => {
          bache.update(collection.doc(item.item.id), {
            stock: item.item.stock - item.quantity,
          });
        });
        bache
          .commit()
          .then((r) => {})
          .catch((err) => {});
      })
      .catch((err) => {});
    clearCart();
  };
  return (
    <>
      <div>
        {user === "" ? (
          <div className="card large">
            <div className="container">
              <h3 className="center-align">
                Ingresa a tu cuenta para concretar la compra!
              </h3>
              <div className="center">
                <Link to={"/LoginPage"}>
                  <button className="waves-effect grey darken-3 white-text text-darken-2 btn-large">
                    Ir a regristrarme
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="card large">
              {id ? (
                <>
                  <h3 className="center-align">
                    Gracias por comprar en Urban!
                  </h3>
                  <p className="center-align yellow-text text-darken-3 ">
                    {user.email}
                  </p>
                  <h5 className="center-align">
                    Orden confirmada! Nro de orden {id}
                  </h5>
                  <div className="center">
                    <Link to={"/"}>
                      <button className="waves-effect grey darken-3 white-text text-darken-2 btn-large">
                        Regresar al catalogo de compra
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="center-align">Ya casi es tuyo!</h2>
                  <p className="center-align yellow-text text-darken-3 ">
                    {user.email}
                  </p>
                  <p className="center-align">Completa los datos de compra</p>
                  <div className="row container">
                    <form onSubmit={manejarCompra}>
                      <div className="input-field col s12">
                        <textarea
                          id="nombretext"
                          className="materialize-textarea"
                          onChange={(e) => setNombre(e.target.value)}
                          value={nombre}
                        ></textarea>
                        <label for="nombretext">Nombre</label>
                      </div>
                      <div className="input-field col s12">
                        <textarea
                          id="telefonotext"
                          className="materialize-textarea"
                          onChange={(e) => setTelefono(e.target.value)}
                          value={telefono}
                        ></textarea>
                        <label for="telefonotext">Telefono</label>
                      </div>
                      <div className="center">
                        <button className="waves-effect grey darken-3 white-text text-darken-2 btn-large">
                          Comprar
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default PurchasePage;
