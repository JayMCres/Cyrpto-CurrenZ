import { FETCH_EXCHANGES } from "../actions/exchanges";

const initialState = {
  exchanges: []
};

export default function exchangesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXCHANGES: {
      return { ...state, exchanges: action.payload };
    }

    default:
      return state;
  }
}
