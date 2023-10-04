import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAYq5F6I4Kg4vOWAKfifJdveqesp3enZN8",
    authDomain: "todo-453b6.firebaseapp.com",
    projectId: "todo-453b6",
    storageBucket: "todo-453b6.appspot.com",
    messagingSenderId: "528058791225",
    appId: "1:528058791225:web:4115ebf145e6afe845a4e8"
  };

  const app = initializeApp(firebaseConfig);
  

export const db = getFirestore(app);