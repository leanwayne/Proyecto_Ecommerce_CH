import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);

  return <div>Bienvenido {user.email}</div>;
}
