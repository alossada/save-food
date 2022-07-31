import { initializeApp } from "firebase/app";
import { getAuth }from 'firebase/auth';
import { getFirestore, 
  collection, 
  doc, 
  addDoc,
  serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzPlQItHkhq0wJpt11PZ-WlRODwTNq8jY",
  authDomain: "save-food-24c9f.firebaseapp.com",
  projectId: "save-food-24c9f",
  storageBucket: "save-food-24c9f.appspot.com",
  messagingSenderId: "733307821554",
  appId: "1:733307821554:web:d75ce451634002384d1f6b",
  measurementId: "G-9BF22F9QMR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  collection, 
  doc,
  addDoc,
  serverTimestamp,
}