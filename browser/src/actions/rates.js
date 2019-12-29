import Rates from "../api/RatesFetch";
export const FETCH_RATES = "FETCH_RATES";

export const fetchRates = () => async dispatch => {
  const response = await Rates.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_RATES, payload: response.data });
};
