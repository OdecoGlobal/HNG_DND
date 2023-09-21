import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYKiL5iBqFyDnNlQ4_cHHBNWzs1B76iIE",
  authDomain: "image-drag-and-drop.firebaseapp.com",
  projectId: "image-drag-and-drop",
  storageBucket: "image-drag-and-drop.appspot.com",
  messagingSenderId: "740369488579",
  appId: "1:740369488579:web:5c995b8baa9e0487daa076",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
