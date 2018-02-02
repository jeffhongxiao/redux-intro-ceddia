import * as ActionTypes from './ActionTypes';

const initialState = {
  counter1: 10,
  counter2: 20,
  counter3: 30,
};

function reducer(state = initialState, action) {
  const key = action.data;

  switch (action.type) {
    // #1: use Object.assign()
    case ActionTypes.INCREMENT:
      const delta = {[key]: state[key] + 1};
      const obj = Object.assign({}, state, delta);
      return obj;

    // #2: use spread operator
    case ActionTypes.DECREMENT:
      return {
        ...state, [key]: state[key] - 1
      };

    default:
      return state;
  }
}

export default reducer;
