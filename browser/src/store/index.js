import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "../config/firebase";

const rffConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore }),
      createLogger({ collapsed: true })
    ),
    reactReduxFirebase(firebase, rffConfig),
    reduxFirestore(firebase)
  )
);
export default store;
