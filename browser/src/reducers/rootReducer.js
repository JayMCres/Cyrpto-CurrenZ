import { combineReducers } from "redux";
import cryptosReducer from "./cryptosReducer";
import exchangeReducer from "./exchangeReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  cryptosReducer,
  exchangeReducer,
  userReducer
});

export default rootReducer;
