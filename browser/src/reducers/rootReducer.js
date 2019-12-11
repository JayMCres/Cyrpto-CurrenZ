import { combineReducers } from "redux";
import cryptos from "./cryptosReducer";
import users from "./userReducer";

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  cryptos,
  users
});

export default rootReducer;
