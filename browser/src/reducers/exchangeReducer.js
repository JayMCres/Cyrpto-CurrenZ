import { FETCH_EXCHANGES, FETCH_EXCHANGE_FEED } from "../actions/exchanges";

const initialState = {
  exchanges: [],
  exchangeFeed: []
};

export default function exchangesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXCHANGES: {
      return { ...state, exchanges: action.payload };
    }
    case FETCH_EXCHANGE_FEED: {
      return { ...state, exchangeFeed: action.payload };
    }

    default:
      return state;
  }
}
