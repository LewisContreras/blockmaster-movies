import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB9S_iSvgObdK4pSzInpBh8tADyQMKXV28",
    authDomain: "blockmaster-199804.firebaseapp.com",
    projectId: "blockmaster-199804",
    storageBucket: "blockmaster-199804.appspot.com",
    messagingSenderId: "104763307554",
    appId: "1:104763307554:web:448f6ffd599702b96c3c7b"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}