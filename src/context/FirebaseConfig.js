import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyByiuk1Ih7P7wDc5w6r0_xrgYqCIYKvBeo",
  authDomain: "pwa-course-2022-208ae.firebaseapp.com",
  projectId: "pwa-course-2022-208ae",
  storageBucket: "pwa-course-2022-208ae.appspot.com",
  messagingSenderId: "864291622563",
  appId: "1:864291622563:web:d752828db07e535e3bb916",
  measurementId: "G-C4887SR5KL",
  databaseURL: "https://pwa-course-2022-208ae-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export { firebase };