import { initializeApp } from "firebase/app";

import "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDvSA-EtO5Jc3Hxv1NfCJL-ksbd7Y_a09g",
  authDomain: "crow-db-fd446.firebaseapp.com",
  projectId: "crow-db-fd446",
  storageBucket: "crow-db-fd446.appspot.com",
  messagingSenderId: "412742549617",
  appId: "1:412742549617:web:82c93877f66350e91b9bd0",
  measurementId: "G-9QSM2SMJ4V",
};

const app = initializeApp(config);

export const auth = getAuth(app);
// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
// provider.setCustomParmeters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export default app;
