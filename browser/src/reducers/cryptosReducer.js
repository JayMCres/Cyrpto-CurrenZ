import { FETCH_CRYPTOS } from "../actions/Cryptos";

const initialState = {
  cryptos: []
};

export default function cryptosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CRYPTOS: {
      return { ...state, cryptos: action.payload };
    }

    default:
      return state;
  }
}
