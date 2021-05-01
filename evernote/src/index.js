import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD5aaagVQN7XoqlYYDyorysSXQHeJztTrI",
  authDomain: "evernote-a168a.firebaseapp.com",
  projectId: "evernote-a168a",
  storageBucket: "evernote-a168a.appspot.com",
  messagingSenderId: "214030682510",
  appId: "1:214030682510:web:cdac2f9e89026417eafcdf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
