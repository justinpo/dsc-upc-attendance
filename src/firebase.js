import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVp-dO-ODq8Ldy1Th20opm3AJhSpsdzeQ",
  authDomain: "dsc-upc-attendance.firebaseapp.com",
  databaseURL: "https://dsc-upc-attendance.firebaseio.com",
  projectId: "dsc-upc-attendance",
  storageBucket: "dsc-upc-attendance.appspot.com",
  messagingSenderId: "607557176072",
  appId: "1:607557176072:web:026a8b660eeaf0d528fabd"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };
