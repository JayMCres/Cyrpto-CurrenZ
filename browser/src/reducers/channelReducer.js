import { SET_CURRENT_CHANNEL, SET_PRIVATE_CHANNEL } from "../actions/channel";

const initialState = {
  currentChannel: null,
  isPrivateChannel: false
};

export default function channelReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel
      };
    case SET_PRIVATE_CHANNEL:
      return {
        ...state,
        isPrivateChannel: action.payload.isPrivateChannel
      };

    default:
      return state;
  }
}
