import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import CounterButtons from './CounterButtons';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const logger = createLogger({
    collapsed: true,
    diff: true,
})

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <CounterButtons />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
