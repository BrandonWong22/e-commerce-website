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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(firestore.doc("users/1234"));
  // console.log(snapShot);
  if (!snapShot.exists) {
    // console.log("ok");
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
