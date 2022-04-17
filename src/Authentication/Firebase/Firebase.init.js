import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyUTjCWoaCgcnsHjyZI-hDLpqYE6QC4G4",
  authDomain: "larry-brandon.firebaseapp.com",
  projectId: "larry-brandon",
  storageBucket: "larry-brandon.appspot.com",
  messagingSenderId: "517114593246",
  appId: "1:517114593246:web:2d2f357095948f9d7ca74f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
