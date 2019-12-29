import { FETCH_GLOBAL } from "../actions/global";

const initialState = {
  globalData: []
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GLOBAL: {
      return { ...state, globalData: action.payload };
    }
    default:
      return state;
  }
}
