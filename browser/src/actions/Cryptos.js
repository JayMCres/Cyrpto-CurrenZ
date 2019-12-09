import Cryptos from "../api/CryptosFetch";

export const FETCH_CRYPTOS = "FETCH_CRYPTOS";

export const fetchCryptos = () => async dispatch => {
  const response = await Cryptos.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_CRYPTOS, payload: response.data });
};
