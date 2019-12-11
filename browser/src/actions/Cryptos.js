import Cryptos from "../api/CryptosFetch";
import Exchange from "../api/ExchangeFetch";

export const FETCH_CRYPTOS = "FETCH_CRYPTOS";

export const FETCH_EXCHANGES = "FETCH_EXCHANGES";

export const fetchCryptos = () => async dispatch => {
  const response = await Cryptos.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_CRYPTOS, payload: response.data });
};

export const fetchExchanges = () => async dispatch => {
  const response = await Exchange.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_EXCHANGES, payload: response.data });
};
