import Cryptos from "../api/CryptosFetch";
import Exchange from "../api/ExchangeFetch";
import Crypto from "../api/CryptoFetch";

export const FETCH_CRYPTOS = "FETCH_CRYPTOS";
export const FETCH_EXCHANGES = "FETCH_EXCHANGES";
export const FETCH_CRYPTO_DETAILS = "FETCH_CRYPTO_DETAILS";
export const SET_CRYPTO_DETAILS = "SET_CRYPTO_DETAILS";
export const SET_CURRENT_CRYPTO = "SET_CURRENT_CRYPTO";

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

export function fetchCryptoDetails(ticker) {
  return dispatch => {
    return fetch("http://localhost:5000/api/crypto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ticker })
    }).then(response => {
      let data = response.json();
      dispatch(setCryptoDetails(data));
    });
  };
}

export const setCryptoDetails = data => async dispatch => {
  const details = await data;
  dispatch({
    type: SET_CRYPTO_DETAILS,
    payload: details
  });
};

export const setCurrentCrypto = crypto => {
  return {
    type: SET_CURRENT_CRYPTO,
    payload: crypto
  };
};
