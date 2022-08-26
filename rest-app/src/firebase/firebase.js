// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpdmeLlQDZOHz-OgYlHRWek76Ci2henqI",
  authDomain: "restaurante-6c36c.firebaseapp.com",
  projectId: "restaurante-6c36c",
  storageBucket: "restaurante-6c36c.appspot.com",
  messagingSenderId: "1083347088385",
  appId: "1:1083347088385:web:270d07d8a5828b19eafc00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);