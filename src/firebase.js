import "firebase/storage";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVkfrYLkeVrTpHQXzTkec5yTDfuyp2uWI",
  authDomain: "disneyplus-clone-c0a6b.firebaseapp.com",
  projectId: "disneyplus-clone-c0a6b",
  storageBucket: "disneyplus-clone-c0a6b.appspot.com",
  messagingSenderId: "1061395208561",
  appId: "1:1061395208561:web:81c77fd7f97dee229f3ed0",
  measurementId: "G-4K3L4CRMXR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage();
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, provider, storage, analytics };
export default db;
