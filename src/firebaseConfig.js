import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDt46OZTZbhI_ncPQ-nyRxGhH7uFtm_MFU",
  authDomain: "proyecto-ecommerce-ch.firebaseapp.com",
  projectId: "proyecto-ecommerce-ch",
  storageBucket: "proyecto-ecommerce-ch.appspot.com",
  messagingSenderId: "1473117284",
  appId: "1:1473117284:web:06f714ca9edba3eb723371"     
})

const auth = app.auth()
const firestore = app.firestore()
export const firestoreAuth ={auth:auth,firestore:firestore} 
export default app

