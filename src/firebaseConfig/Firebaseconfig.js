import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCeQfiRUkeJhF4KzAa9Ex5sS2kUZ4-FbcA",
  authDomain: "warmhands-e9be2.firebaseapp.com",
  projectId: "warmhands-e9be2",
  storageBucket: "warmhands-e9be2.firebasestorage.app",
  messagingSenderId: "696511837947",
  appId: "1:696511837947:web:e6888d9221ccc174e7e25e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth