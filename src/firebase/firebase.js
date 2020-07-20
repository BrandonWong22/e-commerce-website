import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCvZgVyfHcjcBtNn7G0fPygLGtmqXLDHvU",
  authDomain: "e-commerce-website-be72d.firebaseapp.com",
  databaseURL: "https://e-commerce-website-be72d.firebaseio.com",
  projectId: "e-commerce-website-be72d",
  storageBucket: "e-commerce-website-be72d.appspot.com",
  messagingSenderId: "678248071071",
  appId: "1:678248071071:web:064fccbc9db57e05a2c7aa",
  measurementId: "G-12BFWN67NP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
