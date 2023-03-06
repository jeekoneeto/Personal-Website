// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsdD9qPlBrM_QX9MVSp_iLz9JTx49quB4",
  authDomain: "mypersonalwebpage-d961c.firebaseapp.com",
  projectId: "mypersonalwebpage-d961c",
  storageBucket: "mypersonalwebpage-d961c.appspot.com",
  messagingSenderId: "615299159599",
  appId: "1:615299159599:web:d525eee58e1074b21258da",
  measurementId: "G-RYYZ2758GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)