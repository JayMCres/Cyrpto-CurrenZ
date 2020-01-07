import Exchange from "../api/ExchangeFetch";
import ExchangeFeed from "../api/ExchangeFeedFetch";

export const FETCH_EXCHANGES = "FETCH_EXCHANGES";
export const FETCH_EXCHANGE_FEED = "FETCH_EXCHANGE_FEED";

export const fetchExchanges = () => async dispatch => {
  const response = await Exchange.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_EXCHANGES, payload: response.data });
};

export const fetchExchangeFeed = () => async dispatch => {
  const response = await ExchangeFeed.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_EXCHANGE_FEED, payload: response.data });
};
