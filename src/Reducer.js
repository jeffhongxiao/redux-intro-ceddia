import * as ActionTypes from './ActionTypes';

const initialState = {
  // count: {
  //   counter1: 42,
  //   counter2: -10
  // }
  counter1: 42,
  counter2: -10
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      const key = action.data;
      const delta = {[key]: state[key] + 1};
      var obj = Object.assign({}, state, delta);
      return obj;
    case ActionTypes.DECREMENT:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default reducer;
