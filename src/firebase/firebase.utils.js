import firebase from "firebase/app";
// import firebase from 'firebase/compat/app'
import "firebase/firestore"; // functions
import "firebase/auth"; // authentication

// config
const config = {
  apiKey: "AIzaSyAmMzNVW2gUxVIA_sVypd3Y3zurfW1fonM",
  authDomain: "react-nov.firebaseapp.com",
  projectId: "react-nov",
  storageBucket: "react-nov.appspot.com",
  messagingSenderId: "42353272121",
  appId: "1:42353272121:web:2dd8727058ec7d1419f4e8",
};

// create my web app with firebase
firebase.initializeApp(config);

// function for create-documents
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uuid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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

// exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// providers
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
