import {
  FETCH_CRYPTOS,
  FETCH_EXCHANGES,
  SET_CURRENT_CRYPTO,
  SET_CRYPTO_PRICES,
  SET_CRYPTO_DETAILS,
  SET_CRYPTO_MONTHLY,
  SET_HISTORICALS
} from "../actions/cryptos";

const initialState = {
  cryptos: [],
  crypto: null,
  ticker: "",
  prices: [],
  details: {},
  exchanges: [],
  monthlyPrices: [],
  historicals: []
};

export default function cryptosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CRYPTO_MONTHLY: {
      return { ...state, monthlyPrices: action.payload };
    }
    case SET_HISTORICALS: {
      return { ...state, historicals: action.payload };
    }
    case FETCH_CRYPTOS: {
      return { ...state, cryptos: action.payload };
    }
    case FETCH_EXCHANGES: {
      return { ...state, exchanges: action.payload };
    }
    case SET_CURRENT_CRYPTO: {
      return { ...state, crypto: action.payload };
    }
    case SET_CRYPTO_PRICES: {
      return { ...state, prices: action.payload };
    }
    case SET_CRYPTO_DETAILS: {
      return { ...state, details: action.payload };
    }
    default:
      return state;
  }
}
