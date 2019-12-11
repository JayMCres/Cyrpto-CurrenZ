import { FETCH_CRYPTOS, FETCH_EXCHANGES } from "../actions/cryptos";

const initialState = {
  cryptos: [],
  exchanges: []
};

export default function cryptosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CRYPTOS: {
      return { ...state, cryptos: action.payload };
    }
    case FETCH_EXCHANGES: {
      return { ...state, exchanges: action.payload };
    }
    default:
      return state;
  }
}
