import Cryptos from "../api/CryptosFetch";
import Exchange from "../api/ExchangeFetch";
import Crypto from "../api/CryptoFetch";

export const FETCH_CRYPTOS = "FETCH_CRYPTOS";
export const FETCH_EXCHANGES = "FETCH_EXCHANGES";
export const SET_CURRENT_CRYPTO = "SET_CURRENT_CRYPTO";
export const FETCH_CRYPTO_PRICES = "FETCH_CRYPTO_PRICES";
export const SET_CRYPTO_MONTHLY = "SET_CRYPTO_MONTHLY";
export const SET_CRYPTO_PRICES = "SET_CRYPTO_PRICES";
export const FETCH_CRYPTO_DETAILS = "FETCH_CRYPTO_DETAILS";
export const SET_CRYPTO_DETAILS = "SET_CRYPTO_DETAILS";
export const SET_HISTORICALS = "SET_HISTORICALS,";

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

export function fetchHistoricals(ticker) {
  return dispatch => {
    return fetch("http://localhost:5000/api/historicalprices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ticker })
    }).then(response => {
      let data = response.json();
      dispatch(setHistoricals(data));
    });
  };
}

export const setHistoricals = data => async dispatch => {
  const historical = await data;
  dispatch({
    type: SET_HISTORICALS,
    payload: historical
  });
};
export function fetchCryptoPrices(ticker) {
  return dispatch => {
    return fetch("http://localhost:5000/api/historicalprices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ticker })
    }).then(response => {
      let data = response.json();
      dispatch(setCryptoPrices(data));
    });
  };
}

export const setCryptoPrices = data => async dispatch => {
  const prices = await data;
  dispatch({
    type: SET_CRYPTO_PRICES,
    payload: prices
  });
};

export function fetchMonthly(ticker) {
  return dispatch => {
    return fetch("http://localhost:5000/api/monthlyprices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ticker })
    }).then(response => {
      let data = response.json();
      dispatch(setCryptoMonthly(data));
    });
  };
}

export const setCryptoMonthly = data => async dispatch => {
  const prices = await data;
  dispatch({
    type: SET_CRYPTO_MONTHLY,
    payload: prices
  });
};

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
