import * as ActionTypes from './ActionTypes';

const initialState = {
  count: {
    counter1: 42,
    counter2: -10
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        count: state.count + 1
      };
    case ActionTypes.DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default reducer;
