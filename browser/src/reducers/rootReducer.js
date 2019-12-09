import { combineReducers } from "redux";
import cryptosReducer from "./cryptosReducer";

const rootReducer = combineReducers({
  cryptosReducer
});

export default rootReducer;
