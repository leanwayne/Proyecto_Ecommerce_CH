import React, { useState} from 'react'
import app from "../../firebaseConfig"

export const AuthContext = React.createContext();

function AuthProvider( { children }) {
    const [user,setUser] = useState("")
    const [buttonChange, setButtonChange] = useState(false)

    const handleLogout = () => {
        app.auth().signOut()
        setButtonChange(false)
    }

    return (
      <AuthContext.Provider value={{
        user,
        setUser,
        handleLogout,
        buttonChange,
        setButtonChange,
      }}>
        {children}
      </AuthContext.Provider>
    )
}
export default AuthProvider;