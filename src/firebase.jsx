// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA8kD3oMCy4D6ahgp6cyO3yZiAmzIS2ZI",
  authDomain: "personal-web-21891.firebaseapp.com",
  projectId: "personal-web-21891",
  storageBucket: "personal-web-21891.appspot.com",
  messagingSenderId: "665990322686",
  appId: "1:665990322686:web:3cd4cbbef50394c84608af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
