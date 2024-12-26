// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apikey || "default-api-key",
  authDomain: import.meta.env.VITE_authDomain || "default-auth-domain",
  projectId: import.meta.env.VITE_projectId || "default-project-id",
  storageBucket: import.meta.env.VITE_storageBucket || "default-storage-bucket",
  messagingSenderId: import.meta.env.VITE_messagingSenderId || "default-messaging-sender-id",
  appId: import.meta.env.VITE_appId || "default-app-id",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth;