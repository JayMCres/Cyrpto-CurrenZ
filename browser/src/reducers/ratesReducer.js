import { FETCH_RATES } from "../actions/rates";

const initialState = {
  rates: []
};

export default function ratesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RATES: {
      return { ...state, rates: action.payload };
    }
    default:
      return state;
  }
}
