import React, { useState} from 'react'
import firebase from "firebase"
import app from "../firebaseConfig"

export const AuthContext = React.createContext();

function AuthProvider( { children }) {
    const [user,setUser] = useState("")

    const handleLogout = () => {
        app.auth().signOut()
    }

    return (
      <AuthContext.Provider value={{
        user,
        setUser,
        handleLogout,
      }}>
        {children}
      </AuthContext.Provider>
    )
}
export default AuthProvider;