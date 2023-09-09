import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDGJO_Nzd13dRaBoi8gQoVE_8XpWOXZTX0",
    authDomain: "quiz-app-36940.firebaseapp.com",
    projectId: "quiz-app-36940",
    storageBucket: "quiz-app-36940.appspot.com",
    messagingSenderId: "435147370310",
    appId: "1:435147370310:web:611c2280d0c0058e1a3f47",
    measurementId: "G-V4R03HJ2QG"
  };
const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);