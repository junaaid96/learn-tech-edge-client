// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDIB-a79PiInH37-VzhQ9R81OW9VHQw0A",
    authDomain: "learn-tech-edge.firebaseapp.com",
    projectId: "learn-tech-edge",
    storageBucket: "learn-tech-edge.appspot.com",
    messagingSenderId: "180348615975",
    appId: "1:180348615975:web:e030e5a822d9d49e67fd02"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
