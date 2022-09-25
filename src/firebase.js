import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDklgtBQUdeRW3hgUVtatpFtnqOMWVb68k",
    authDomain: "mcity-b18fa.firebaseapp.com",
    projectId: "mcity-b18fa",
    storageBucket: "mcity-b18fa.appspot.com",
    messagingSenderId: "435867957349",
    appId: "1:435867957349:web:fffa40c0841516899a2e8c",
    measurementId: "G-2CNYXPTJK4"
  };
 
  // Initialize Firebase
 const app  = initializeApp(firebaseConfig);
 const auth = getAuth();

 export function login( email, password){
    signInWithEmailAndPassword(auth, email, password);
 }
  
