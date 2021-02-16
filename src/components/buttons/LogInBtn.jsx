import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function LogInBtn() {
  const { handleLogout, buttonChange } = useContext(AuthContext);

  return (
    <>
      {buttonChange ? (
        <li>
          <Link to="/home">
            <a>
              <i onClick={() => handleLogout()} class="material-icons right">
              home
              </i>
              Home
            </a>
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/LoginPage">
            <a>
              <i class="material-icons right">person</i>Log In
            </a>
          </Link>
        </li>
      )}
    </>
  );
}
