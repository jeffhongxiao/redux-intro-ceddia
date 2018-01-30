import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Counter from './Counter';
import CounterButtons from './CounterButtons';
import store from './Store';

const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <CounterButtons />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
