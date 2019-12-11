export const SET_CURRENT_CHANNEL = " SET_CURRENT_CHANNEL";
export const SET_PRIVATE_CHANNEL = " SET_PRIVATE_CHANNEL";

export const setCurrentChannel = channel => {
  return {
    type: SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel
    }
  };
};

export const setPrivateChannel = isPrivateChannel => {
  return {
    type: SET_PRIVATE_CHANNEL,
    payload: {
      isPrivateChannel
    }
  };
};
