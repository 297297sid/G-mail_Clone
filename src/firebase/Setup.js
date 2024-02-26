
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDZZWkJEg-OYhBG1FZ3xngvqSpixWYLEPI",
  authDomain: "clone-97cd1.firebaseapp.com",
  projectId: "clone-97cd1",
  storageBucket: "clone-97cd1.appspot.com",
  messagingSenderId: "840073701926",
  appId: "1:840073701926:web:4c22f97ec798cd8c7e54e7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);