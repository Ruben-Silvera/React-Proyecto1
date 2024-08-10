import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5rUNDaVAc1q6ZFCRvPChoSyfW6wAvp3g",
  authDomain: "proyectorenner.firebaseapp.com",
  projectId: "proyectorenner",
  storageBucket: "proyectorenner.appspot.com",
  messagingSenderId: "878418389282",
  appId: "1:878418389282:web:9cab9a3f636e4921791d7b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
