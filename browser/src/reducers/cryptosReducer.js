import {
  FETCH_CRYPTOS,
  FETCH_EXCHANGES,
  SET_CURRENT_CRYPTO,
  SET_CRYPTO_DETAILS
} from "../actions/cryptos";

const initialState = {
  cryptos: [],
  exchanges: [],
  crypto: {},
  ticker: ""
};

export default function cryptosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CRYPTOS: {
      return { ...state, cryptos: action.payload };
    }
    case FETCH_EXCHANGES: {
      return { ...state, exchanges: action.payload };
    }
    case SET_CURRENT_CRYPTO: {
      return { ...state, crypto: action.payload };
    }
    case SET_CRYPTO_DETAILS: {
      return { ...state, details: action.payload };
    }
    default:
      return state;
  }
}
