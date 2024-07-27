import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfuWtN3paAOWrBpO6dAjeaafI6c7B4t0M",
  authDomain: "tgm-servicos-e-acessoria.firebaseapp.com",
  databaseURL: "https://tgm-servicos-e-acessoria-default-rtdb.firebaseio.com",
  projectId: "tgm-servicos-e-acessoria",
  storageBucket: "tgm-servicos-e-acessoria.appspot.com",
  messagingSenderId: "601073048359",
  appId: "1:601073048359:web:68e75b8e120793183ee702",
  measurementId: "G-RGPGLXCB55"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);