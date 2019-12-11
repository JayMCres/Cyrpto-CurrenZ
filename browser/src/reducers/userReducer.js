import { SET_USER, CLEAR_USER } from "../actions/auth";

const initialState = {
  currentUser: {},
  loading: true
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        currentUser: action.payload.currentUser,
        loading: false
      };
    }
    case CLEAR_USER: {
      return {
        currentUser: null,
        loading: false
      };
    }

    default:
      return state;
  }
}
