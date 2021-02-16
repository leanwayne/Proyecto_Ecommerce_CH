import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const apiKey = process.env.REACT_APP_apiKey;
const authDomain = process.env.REACT_APP_authDomain;
const projectId = process.env.REACT_APP_projectId;
const storageBucket = process.env.REACT_APP_storageBucket;
const messagingSenderId = process.env.REACT_APP_messagingSenderId;
const appId = process.env.REACT_APP_appId;
const config = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = firebase.initializeApp(config);

const auth = app.auth();
const firestore = app.firestore();
export const firestoreAuth = { auth: auth, firestore: firestore };
export default app;
