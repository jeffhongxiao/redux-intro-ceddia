import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

import reducer from './Reducer';

const logger = createLogger({
    collapsed: true,
    diff: true,
})

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

export default store;
