// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwFhY16WbjZ2kjnxk7U8gH6G3xEYEYwk8",
  authDomain: "pbbapp-3cda1.firebaseapp.com",
  projectId: "pbbapp-3cda1",
  storageBucket: "pbbapp-3cda1.appspot.com",
  messagingSenderId: "248758143610",
  appId: "1:248758143610:web:37bd5b05082b7cac1e09c3",
  measurementId: "G-NJEBDSWJYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);