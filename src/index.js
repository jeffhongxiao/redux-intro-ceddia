import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Counter from './views/Counter';
import CounterButtons from './views/CounterButtons';
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
