import {
  FETCH_CRYPTOS,
  FETCH_EXCHANGES,
  SET_CURRENT_CRYPTO,
  SET_CRYPTO_PRICES,
  SET_CRYPTO_DETAILS,
  SET_CRYPTO_CHART,
  SET_HISTORICALS,
  FETCH_NEWS
} from "../actions/cryptos";

const initialState = {
  cryptos: [],
  crypto: null,
  ticker: "",
  prices: [],
  details: {},
  exchanges: [],
  chartPrices: [],
  historicals: [],
  news: []
};

export default function cryptosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CRYPTO_CHART: {
      return { ...state, chartPrices: action.payload };
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
    case FETCH_NEWS: {
      return { ...state, news: action.payload };
    }
    default:
      return state;
  }
}
