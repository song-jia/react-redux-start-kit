import {Map} from 'immutable';

const initialState = Map({});

/**
 * reducer.
 * @param {object} state current state.
 * @param {object} action action to be handled.
 */
export default function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case 'ACTION1':
      // do something here.
      return state;
    default:
      return state;
  }
  return state;
}
