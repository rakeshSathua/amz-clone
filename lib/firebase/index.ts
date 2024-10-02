// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPF8pY3g7naUXxL5ExpTwb-4n-6m5_Lqw",
  authDomain: "amz-clone-63230.firebaseapp.com",
  projectId: "amz-clone-63230",
  storageBucket: "amz-clone-63230.appspot.com",
  messagingSenderId: "260520479252",
  appId: "1:260520479252:web:8f4cd6dd6598077ea07501",
  measurementId: "G-2SEF6JW3H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
