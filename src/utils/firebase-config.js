import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDVQKyOKRwmkW_cKSNJ2q6bSy2j4NNGu0w",
  authDomain: "netflix-cfedd.firebaseapp.com",
  projectId: "netflix-cfedd",
  storageBucket: "netflix-cfedd.appspot.com",
  messagingSenderId: "848080120434",
  appId: "1:848080120434:web:4b4f13475e96b02b2eb0eb",
  measurementId: "G-0G7PH043YB",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
