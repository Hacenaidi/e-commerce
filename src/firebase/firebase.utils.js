import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, `users/${userAuth.uid}`);
  const snap = await getDoc(userRef);
  if (!snap.exists()) {
    const { displayName, email } = userAuth;
    const createDat = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createDat,
        ...additionalData,
      });
    } catch (error) {
      console.log("error create user", error.message);
    }
  }
  return userRef;
};
const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
// provider.setCustomParmeters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export default app;
