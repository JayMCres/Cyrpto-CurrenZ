import { FETCH_MARKET, FETCH_VOLUME } from "../actions/global";

const initialState = {
  marketData: [],
  volumeData: []
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MARKET: {
      return {
        ...state,
        marketData: action.payload
      };
    }
    case FETCH_VOLUME: {
      return {
        ...state,
        volumeData: action.payload
      };
    }
    default:
      return state;
  }
}
