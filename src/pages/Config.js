import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPOCZrplXjTE1L8otKHdkwMKbzmaLZM1M",
    authDomain: "zada-kheir-5c5b1.firebaseapp.com",
    projectId: "zada-kheir-5c5b1",
    storageBucket: "zada-kheir-5c5b1.appspot.com",
    messagingSenderId: "24459042887",
    appId: "1:24459042887:web:a4ac004952bf5ca304d162"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider, signInWithEmailAndPassword, signOut };