import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import app from "../../firebaseConfig";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const { setUser , setButtonChange } = useContext(AuthContext);

  const history = useHistory();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    console.log(email, password);
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("handleLogin", userCredential.user);
        setUser(userCredential.user);
        history.push("/home");
      })
      .catch((err) => {
        console.log("err", err);
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disable":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
      setButtonChange(true)
  };

  const handleSignup = () => {
    clearErrors();
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log("handleSignup", userCredential);
        history.push("/home");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
      setButtonChange(true)
  };

  const authListener = () => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
        console.log("authlistener", user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="row">
      <div className="card large ">
        <h3 className="center-align">Bienvenido a Urban</h3>
        <div className="row container">
          <div className="input-field col s12">
          <input 
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
              type="text"
              id="emailtext"/>
            <label for="emailtext">Email</label>
            <p className="errorMsg">{emailError}</p>
          </div>
          <div className="input-field col s12">
            <input 
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
              type="password"
              id="passtext"/>
            <label for="passtext">Password</label>
            <p className="errorMsg">{passwordError}</p>
          </div>
        </div>
        <div>
          {hasAccount ? (
            <div className="center">
              <button
                className=" center-align waves-effect grey darken-3 white-text text-darken-2 btn-small"
                onClick={handleSignup}
              >
                Registrate
              </button>
              <p className="center-align">
                tenes una cuenta?{" "}
                <span
                  className="blue-text"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Ingresar
                </span>
              </p>
            </div>
          ) : (
            <div className="center">
              <button
                className="waves-effect grey darken-3 white-text text-darken-2 btn-small"
                onClick={handleLogin}
              >
                Ingresar
              </button>
              <p className="center-align">
                no tenes una cuenta?{" "}
                <p
                  className="blue-text"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Registrate
                </p>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
