import firebase from "firebase/app";
import "firebase/firestore";

const miConfiguracion = {   
    apiKey: "AIzaSyDt46OZTZbhI_ncPQ-nyRxGhH7uFtm_MFU",
    authDomain: "proyecto-ecommerce-ch.firebaseapp.com",
    projectId: "proyecto-ecommerce-ch",
    storageBucket: "proyecto-ecommerce-ch.appspot.com",
    messagingSenderId: "1473117284",
    appId: "1:1473117284:web:06f714ca9edba3eb723371"     
}

const app = firebase.initializeApp(miConfiguracion)

export const firestore = firebase.firestore(app)