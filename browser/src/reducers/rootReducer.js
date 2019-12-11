import { combineReducers } from "redux";
import cryptos from "./cryptosReducer";
import users from "./userReducer";
import channels from "./channelReducer";

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  cryptos,
  users,
  channels
});

export default rootReducer;
