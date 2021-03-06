import update from 'immutability-helper';

import ActionTypes from '../actionTypes';

const initialState = {
  chaosRate: 0,
  isRainbowMode: false,
  takeoverMode: 'disabled',
};

export default function session(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SESSION_CHANGE_CHAOS_RATE:
      return update(state, {
        chaosRate: { $set: action.value },
      });
    case ActionTypes.SESSION_CHANGE_RAINBOW_MODE:
      return update(state, {
        isRainbowMode: { $set: action.value },
      });
    case ActionTypes.SESSION_CHANGE_TAKEOVER:
      return update(state, {
        takeoverMode: { $set: action.value },
      });
    default:
      return state;
  }
}
