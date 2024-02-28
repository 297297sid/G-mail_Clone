import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyDZZWkJEg-OYhBG1FZ3xngvqSpixWYLEPI",
  // authDomain: "clone-97cd1.firebaseapp.com",
  // projectId: "clone-97cd1",
  // storageBucket: "clone-97cd1.appspot.com",
  // messagingSenderId: "840073701926",
  // appId: "1:840073701926:web:4c22f97ec798cd8c7e54e7"
  apiKey: "AIzaSyDWGZLcv0RotmOzLahN71O1gC2fje2gl44",
  authDomain: "clone-final-b3dce.firebaseapp.com",
  projectId: "clone-final-b3dce",
  storageBucket: "clone-final-b3dce.appspot.com",
  messagingSenderId: "502861099571",
  appId: "1:502861099571:web:a8baa81ef86829171ba946",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
