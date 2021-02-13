import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function LogInBtn() {

  return (
    <li>
      <Link to="/LoginPage">
        <a><i class="material-icons right">person</i>Log In</a>
      </Link>
    </li>
  );
}