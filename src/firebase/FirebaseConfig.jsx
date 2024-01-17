// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMX_W3mUHV2PZ_PLwTr1eo-mGhiGnIknA",
  authDomain: "myfirstappe-commerce.firebaseapp.com",
  projectId: "myfirstappe-commerce",
  storageBucket: "myfirstappe-commerce.appspot.com",
  messagingSenderId: "500592457610",
  appId: "1:500592457610:web:9fdef5d94b58efb69fba73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;