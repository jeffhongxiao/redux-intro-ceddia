import * as ActionTypes from './ActionTypes';

export const increment = (name) => {
  return {
    type: ActionTypes.INCREMENT,
    data: name
  };
}

export const decrement = (name) => {
  return {
    type: ActionTypes.DECREMENT,
    data: name
  };
}
