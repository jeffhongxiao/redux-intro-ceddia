import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import CounterComponent from './views/CounterComponent';
import store from './Store';

const App = () => (
  <Provider store={store}>
    <div>
      <CounterComponent />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
