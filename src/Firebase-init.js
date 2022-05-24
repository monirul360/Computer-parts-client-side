// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZtc1eHVrga6M3FCflq7M-31RM-6MveEI",
    authDomain: "sympole-computer-parts.firebaseapp.com",
    projectId: "sympole-computer-parts",
    storageBucket: "sympole-computer-parts.appspot.com",
    messagingSenderId: "693497603726",
    appId: "1:693497603726:web:eef2e221c5757dcf228bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth