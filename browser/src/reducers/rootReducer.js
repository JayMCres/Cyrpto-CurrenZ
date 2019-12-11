import { combineReducers } from "redux";
import cryptosReducer from "./cryptosReducer";
import exchangeReducer from "./exchangeReducer";

const rootReducer = combineReducers({
  cryptosReducer,
  exchangeReducer
});

export default rootReducer;
