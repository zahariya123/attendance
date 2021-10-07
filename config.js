import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAPQSYCfcEV8PwzBVBIgGwWlUUPG47dDAM",
    authDomain: "wireless-buzzer-bfdff.firebaseapp.com",
    projectId: "wireless-buzzer-bfdff",
    storageBucket: "wireless-buzzer-bfdff.appspot.com",
    messagingSenderId: "469247733097",
    appId: "1:469247733097:web:e70a3766b49dcacc4ba1f8",
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.database()