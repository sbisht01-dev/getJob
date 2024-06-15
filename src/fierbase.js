import { initializeApp } from "firebase/app";
import { configDotenv } from "dotenv";
const firebaseConfig = {
  apiKey: process.REACT_APP_API_KEY,
  authDomain: "getjob-2bdca.firebaseapp.com",
  projectId: "getjob-2bdca",
  storageBucket: "getjob-2bdca.appspot.com",
  messagingSenderId: "338998159739",
  appId: "1:338998159739:web:042319b66c6d427b80b5de",
  measurementId: "G-9YLB73PZ2Q",
};

export const app = initializeApp(firebaseConfig);
