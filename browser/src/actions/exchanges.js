import Exchange from "../api/ExchangeFetch";

export const FETCH_EXCHANGES = "FETCH_EXCHANGES";

export const fetchExchanges = () => async dispatch => {
  const response = await Exchange.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_EXCHANGES, payload: response.data });
};
