import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_apiKey,
    authDomain: import.meta.env.VITE_REACT_APP_authDomain,
    projectId: import.meta.env.VITE_REACT_APP_projectId,
    storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
    messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
    appId: import.meta.env.VITE_REACT_APP_appId,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)