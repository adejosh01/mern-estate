// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "bigjoshestate.firebaseapp.com",
  projectId: "bigjoshestate",
  storageBucket: "bigjoshestate.appspot.com",
  messagingSenderId: "492140480604",
  appId: "1:492140480604:web:1f717c8b72a42366157e99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);