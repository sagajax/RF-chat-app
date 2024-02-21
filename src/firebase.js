// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6LX4xSw9qYnjN12zgSu_7p7YuHzoLtBg",
  authDomain: "rf-chat-9d2ac.firebaseapp.com",
  projectId: "rf-chat-9d2ac",
  storageBucket: "rf-chat-9d2ac.appspot.com",
  messagingSenderId: "440883210823",
  appId: "1:440883210823:web:071fe50896be9b64095f62",
  measurementId: "G-4Q0P3JDLRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);