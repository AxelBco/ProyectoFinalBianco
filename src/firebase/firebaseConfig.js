import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDYYl9yqnKsBcz7UDC9On2fFc9FFnmn_o",
    authDomain: "manga-store-279a4.firebaseapp.com",
    projectId: "manga-store-279a4",
    storageBucket: "manga-store-279a4.firebasestorage.app",
    messagingSenderId: "465381949997",
    appId: "1:465381949997:web:9b6a97e3e200b10cb9eea4"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
