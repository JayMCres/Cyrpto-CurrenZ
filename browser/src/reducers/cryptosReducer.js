import {
  FETCH_CRYPTOS,
  FETCH_EXCHANGES,
  SET_CURRENT_CRYPTO,
  SET_CRYPTO_PRICES,
  SET_CRYPTO_DETAILS,
  SET_CRYPTO_CHART,
  SET_HISTORICALS,
  FETCH_NEWS,
  FETCH_FEED,
  FETCH_CARDS,
  FETCH_CHARTS
} from "../actions/cryptos";

const initialState = {
  cryptos: [],
  crypto: null,
  ticker: "",
  prices: [],
  details: {},
  exchanges: [],
  chartPrices: [],
  monthlyPrices: [],
  threeMonthsPrices: [],
  sixMonthsPrices: [],
  annualPrices: [],
  historicals: [],
  news: [],
  feed: [],
  cards: [],
  charts: []
};

export default function cryptosReducer(state = initialState, action) {
  switch (action.type) {
    // case SET_CRYPTO_CHART: {
    //   return { ...state, chartPrices: action.payload };
    // }
    case SET_CRYPTO_CHART: {
      return {
        ...state,
        monthlyPrices: action.payload.filter((obj, index) => {
          return index > action.payload.length - 31;
        }),
        threeMonthsPrices: action.payload.filter((obj, index) => {
          return index > action.payload.length - 91;
        }),
        sixMonthsPrices: action.payload.filter((obj, index) => {
          return index > action.payload.length - 181;
        }),
        annualPrices: action.payload.filter((obj, index) => {
          return index > action.payload.length - 365;
        })
      };
    }
    case SET_HISTORICALS: {
      return { ...state, historicals: action.payload };
    }
    case FETCH_CRYPTOS: {
      return { ...state, cryptos: action.payload };
    }
    case FETCH_CHARTS: {
      return { ...state, charts: action.payload };
    }
    case FETCH_EXCHANGES: {
      return { ...state, exchanges: action.payload };
    }
    case FETCH_CARDS: {
      return { ...state, cards: action.payload };
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
    case FETCH_FEED: {
      return { ...state, feed: action.payload };
    }
    default:
      return state;
  }
}
