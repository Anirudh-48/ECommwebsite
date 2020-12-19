import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC_kTOSgndQNRZd79Cp1QSgwqBlNsxXVHQ",
    authDomain: "ecomwebdb.firebaseapp.com",
    projectId: "ecomwebdb",
    storageBucket: "ecomwebdb.appspot.com",
    messagingSenderId: "202767550054",
    appId: "1:202767550054:web:d29ca32e45d612d4b04fa7",
    measurementId: "G-H4NLEWSVY6"
  };

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;