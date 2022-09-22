import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjAgmihY6Bq3BkJchw4n4tJNgbqnjGcEk",
  authDomain: "miniblog-d3bac.firebaseapp.com",
  projectId: "miniblog-d3bac",
  storageBucket: "miniblog-d3bac.appspot.com",
  messagingSenderId: "852665582458",
  appId: "1:852665582458:web:4125530951225ef9630cc3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
