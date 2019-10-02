import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAZS6V9PUXdM9y58Db4tbczkBLi-449UH8",
  authDomain: "todo-ninja-c5d18.firebaseapp.com",
  databaseURL: "https://todo-ninja-c5d18.firebaseio.com",
  projectId: "todo-ninja-c5d18",
  storageBucket: "todo-ninja-c5d18.appspot.com",
  messagingSenderId: "370263761616",
  appId: "1:370263761616:web:5ee61de73f7b612c7a34d5",
  measurementId: "G-6TC02TSC28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({});

export default db;