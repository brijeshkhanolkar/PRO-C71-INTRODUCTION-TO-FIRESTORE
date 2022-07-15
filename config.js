import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAQNzdLPWfHQiAnoN5wIEw_TRRQr1l5has",
    authDomain: "pro-c71-6f874.firebaseapp.com",
    projectId: "pro-c71-6f874",
    storageBucket: "pro-c71-6f874.appspot.com",
    messagingSenderId: "840818000324",
    appId: "1:840818000324:web:283d0fa9ca15351affe491"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
