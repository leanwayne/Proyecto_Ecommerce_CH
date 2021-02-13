import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const WishList = () => {
    const {handleLogout}= useContext(AuthContext);
    return (
        <>
            <h1>ingreso solo para usuarios</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default WishList;