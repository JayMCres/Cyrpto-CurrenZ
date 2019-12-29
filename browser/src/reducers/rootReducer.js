import { combineReducers } from "redux";
import cryptos from "./cryptosReducer";
import users from "./userReducer";
import channels from "./channelReducer";
import rates from "./ratesReducer";
import exchanges from "./exchangeReducer";
import global from "./globalReducer";

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  cryptos,
  users,
  channels,
  rates,
  exchanges,
  global
});

export default rootReducer;
