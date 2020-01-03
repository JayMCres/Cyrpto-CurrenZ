import MarketCap from "../api/MarketCapFetch";
import Volume from "../api/VolumeFetch";
export const FETCH_MARKET = "FETCH_MARKET";
export const FETCH_VOLUME = "FETCH_VOLUME";

export const fetchMarketData = () => async dispatch => {
  const response = await MarketCap.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_MARKET, payload: response.data });
};

export const fetchVolumeData = () => async dispatch => {
  const response = await Volume.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_VOLUME, payload: response.data });
};
