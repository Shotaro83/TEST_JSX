// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyYa2EUDGEGZOlnXpt4e-Hl2xUM8upkGc",
  authDomain: "tsplayground-77b71.firebaseapp.com",
  databaseURL: "https://tsplayground-77b71-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tsplayground-77b71",
  storageBucket: "tsplayground-77b71.appspot.com",
  messagingSenderId: "629972731141",
  appId: "1:629972731141:web:1db70e17697ea42ed5236c",
  measurementId: "G-DZCFFJY30D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);