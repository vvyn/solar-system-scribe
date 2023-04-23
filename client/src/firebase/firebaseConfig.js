// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB46maSM7Up5Fj7Yo3BERL8vih2lYI3o94",
  authDomain: "solar-system-scribe.firebaseapp.com",
  projectId: "solar-system-scribe",
  storageBucket: "solar-system-scribe.appspot.com",
  messagingSenderId: "414695991566",
  appId: "1:414695991566:web:8bb9464846b1f90a3f4f5f",
  measurementId: "G-D3V92CGHV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
