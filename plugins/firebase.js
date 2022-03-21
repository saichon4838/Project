// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZZiU93YJlokFJDu_VFaQX6bk1a0SV-BU",
  authDomain: "su-cosmetics.firebaseapp.com",
  projectId: "su-cosmetics",
  storageBucket: "su-cosmetics.appspot.com",
  messagingSenderId: "965773591205",
  appId: "1:965773591205:web:583bc95ceb43265fa3c34c",
  measurementId: "G-W5CV9H0ZEJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default firebase