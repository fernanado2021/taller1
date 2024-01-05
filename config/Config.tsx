import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDRluVz-YuuN6ytRyJPKP01qpdFO1YxQ4c",
  authDomain: "proyecto-moviles-2-44dd5.firebaseapp.com",
  databaseURL: "https://proyecto-moviles-2-44dd5-default-rtdb.firebaseio.com",
  projectId: "proyecto-moviles-2-44dd5",
  storageBucket: "proyecto-moviles-2-44dd5.appspot.com",
  messagingSenderId: "1086834953669",
  appId: "1:1086834953669:web:9c0d77b1c1699c34460fac"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)