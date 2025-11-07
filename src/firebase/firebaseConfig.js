// Import required Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdPqsuFHdy0ROnJ9hRbQaGryQVyS264FY",
  authDomain: "my-portfolio-testimonials.firebaseapp.com",
  projectId: "my-portfolio-testimonials",
  storageBucket: "my-portfolio-testimonials.firebasestorage.app",
  messagingSenderId: "546464499425",
  appId: "1:546464499425:web:c342225b2a3b1c663059a0",
  measurementId: "G-04J8NWXJ9Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
const db = getFirestore(app);

// Export database instance
export { db };
