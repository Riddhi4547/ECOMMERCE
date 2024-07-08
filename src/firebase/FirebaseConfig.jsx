// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyById37wNfT_X3yJDzh60O6Kt1WlXiY6Q8",
  authDomain: "myecom-3bd51.firebaseapp.com",
  projectId: "myecom-3bd51",
  storageBucket: "myecom-3bd51.appspot.com",
  messagingSenderId: "930835783139",
  appId: "1:930835783139:web:16321b1c45dedabfa3d4d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {auth, fireDB}