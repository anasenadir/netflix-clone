// import {initializeApp} from "firebase/app"

import { initializeApp } from "firebase/app";
import {getAuth 
        , createUserWithEmailAndPassword 
        ,onAuthStateChanged 
        ,signOut 
        ,signInWithEmailAndPassword } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQu_nwX3THWq1SWwsyHT64XnIJI0AINS4",
  authDomain: "neflix-clone-9611e.firebaseapp.com",
  projectId: "neflix-clone-9611e",
  storageBucket: "neflix-clone-9611e.appspot.com",
  messagingSenderId: "365122080964",
  appId: "1:365122080964:web:ccce52aa9a67561b013991",
  measurementId: "G-5B3C70FBDX"
};

// const firebaseApp         = initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db          = firebaseApp.firesotre();
// const auth        = initializeApp.


const firebaseApp = initializeApp(firebaseConfig);
// const db          = firebaseApp.firestore();
const auth        = getAuth(firebaseApp);
export {auth , createUserWithEmailAndPassword , onAuthStateChanged , signOut ,signInWithEmailAndPassword }
// export default db;