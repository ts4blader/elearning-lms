import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGJLq4ob4oaULEIbUSh372_9XULYMoxTs",
  authDomain: "altar-intern.firebaseapp.com",
  projectId: "altar-intern",
  storageBucket: "altar-intern.appspot.com",
  messagingSenderId: "808742467445",
  appId: "1:808742467445:web:273bd81fbc201f82aa053c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
