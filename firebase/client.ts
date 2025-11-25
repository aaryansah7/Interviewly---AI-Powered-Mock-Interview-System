import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: "interviewly-26c11.firebaseapp.com",
  projectId: "interviewly-26c11",
  storageBucket: "interviewly-26c11.firebasestorage.app",
  messagingSenderId: "565667561408",
  appId: "1:565667561408:web:f4fc461b5ca9bbf0a79225",
  measurementId: "G-7YT56E1VLE"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);


