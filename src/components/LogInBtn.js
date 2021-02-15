import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";



export default function LogInBtn() {
  const { user, handleLogout } = useContext(AuthContext);

  return (
  <>
    {user === ""?(
    <li>
    <Link to="/LoginPage">
    <a><i  onClick={()=>handleLogout()} class="material-icons right">person</i>Log Out</a>
    </Link>
    </li>
      
      ):(
        <li>
        <Link to="/LoginPage">
          <a><i class="material-icons right">person</i>Log In</a>
        </Link>
        </li>
      
      
      )}
  </>
  );
}
