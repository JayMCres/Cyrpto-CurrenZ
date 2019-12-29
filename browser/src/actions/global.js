import Global from "../api/GlobalFetch";
export const FETCH_GLOBAL = "FETCH_GLOBAL";

export const fetchGlobalData = () => async dispatch => {
  const response = await Global.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_GLOBAL, payload: response.data });
};
