import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDv9Mn67d6AEkaUpqvxzDKFugEhKPnFjUY",
  authDomain: "rest-cypress-github-actions.firebaseapp.com",
  projectId: "rest-cypress-github-actions",
  storageBucket: "rest-cypress-github-actions.appspot.com",
  messagingSenderId: "893867296167",
  appId: "1:893867296167:web:2af2c4f763d852c4b16282",
  measurementId: "G-2QY7037ZDJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
