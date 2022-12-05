// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDJw6PwfL1ObUcCdk3rz0ljBdt6BtklUOg",
    authDomain: "login-form-41bfb.firebaseapp.com",
    projectId: "login-form-41bfb",
    storageBucket: "login-form-41bfb.appspot.com",
    messagingSenderId: "718375023793",
    appId: "1:718375023793:web:5b9be929564e51340c9e90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
