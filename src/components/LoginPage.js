import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import app from "../firebaseConfig"
import {useHistory} from 'react-router-dom'

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)
    const {setUser} = useContext(AuthContext);

    const history = useHistory();

    const clearInputs = () => {
        setEmail("")
        setPassword("")
    }

    const clearErrors = () => {
        setEmailError("")
        setPasswordError("")
    }

    const handleLogin = () => {
        clearErrors()
        console.log(email, password)
        app.auth()
        .signInWithEmailAndPassword(email,password)
        .then((userCredential) => {
            console.log(userCredential.user)
            setUser(userCredential.user);
            history.push('/home')
        })
        .catch(err => {
            console.log('err', err)
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
        })
    }

    const handleSignup = () => {
        clearErrors()
        app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) =>{
            setUser(userCredential.user)
            history.push('/home')
        })
        .catch(err => {
            switch (err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;    
            }
        })
    }

    const authListener = () => {
        app.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs() 
                setUser(user)
            }else{
                setUser("")
            }  
        })
    }

    useEffect(()=>{
        authListener()
    },[])

  return (
    <div className="row">
        <div className="card large ">     
            
                <h4 className="center-align">Bienvenido a Urban</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea 
                            id="emailtext" 
                            className="materialize-textarea" 
                            onChange={e=>setEmail(e.target.value)}
                            value={email}>
                            </textarea>
                            <label for="emailtext">Email</label>
                            <p className="errorMsg">{emailError}</p>
                        </div>
                        <div className="input-field col s12">
                            <textarea 
                            id="passtext" 
                            className="materialize-textarea" 
                            onChange={e=>setPassword(e.target.value)}
                            required value={password}>
                            </textarea>
                            <label for="passtext">Password</label>
                            <p className="errorMsg">{passwordError}</p>
                        </div>

                    </div> 
                    <div>
                        {hasAccount ? (
                            <>
                              <button onClick={handleLogin} >Ingresar</button>
                              <p>no tenes una cuenta? <span onClick={()=> setHasAccount(!hasAccount)}>Registrate</span></p>   
                            </>
                        ) : (
                            <>
                            <button onClick={handleSignup}>Registrate</button>
                            <p>tenes una cuenta? <span onClick={()=> setHasAccount(!hasAccount)}>Ingresar</span></p>
                            </>
                        )}
                        
                    </div>                    
           
        </div>
    </div>
  );
}
export default LoginPage;