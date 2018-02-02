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
      // return {
      //   //...state, ['count'][action.data]: state['count'][action.data] + 1
      //   ...state, count: {...state['count'], count[action.data]: {...state['count'][action.data]}}
      // };
      const delta = {counter1: state['counter1'] + 1};
      var obj = Object.assign({}, state, delta);
      return obj;
    case ActionTypes.DECREMENT:
      return {
        //...state, ['count'][action.data]: state['count'][action.data] - 1
        ...state
      };
    default:
      return state;
  }
}

export default reducer;
