// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnTyORfOZdmU8GqK7MRof2aAy2JUgTPKM",
  authDomain: "toystrader-a494f.firebaseapp.com",
  projectId: "toystrader-a494f",
  storageBucket: "toystrader-a494f.appspot.com",
  messagingSenderId: "267868385149",
  appId: "1:267868385149:web:96d5672eabeba4b4efe614",
  measurementId: "G-WGYN2J08TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('analytics', analytics);
