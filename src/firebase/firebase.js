import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjQPGcoYcYKORfSuW-GCi746ow7A0RCNw",
  authDomain: "ucc-events-c6e91.firebaseapp.com",
  projectId: "ucc-events-c6e91",
  storageBucket: "ucc-events-c6e91.firebasestorage.app",
  messagingSenderId: "1033907615940",
  appId: "1:1033907615940:web:84643214eec18e76673191",
  measurementId: "G-3YTJB6F1V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
};