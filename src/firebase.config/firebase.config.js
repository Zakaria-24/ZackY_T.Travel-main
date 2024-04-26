// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeQZ39eUfmSIhEzSlnG6HDd9mgqZySVmA",
  authDomain: "southeast-asia-ec5f1.firebaseapp.com",
  projectId: "southeast-asia-ec5f1",
  storageBucket: "southeast-asia-ec5f1.appspot.com",
  messagingSenderId: "252029447827",
  appId: "1:252029447827:web:68a2176b268e73563e2766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;