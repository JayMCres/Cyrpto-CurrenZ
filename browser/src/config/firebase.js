import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDzAHJJNn_MdSjpp3DJ9Q_e8ejmp-PM_k0",
  authDomain: "crypto-redux.firebaseapp.com",
  databaseURL: "https://crypto-redux.firebaseio.com",
  projectId: "crypto-redux",
  storageBucket: "crypto-redux.appspot.com",
  messagingSenderId: "969303276578",
  appId: "1:969303276578:web:31c2fddd388fabe0f9de7b",
  measurementId: "G-BQ7HE7BJSY"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
