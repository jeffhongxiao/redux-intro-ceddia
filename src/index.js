import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import CounterComponent from './views/CounterComponent';
import SumOfCounters from './views/SumOfCounters';
import store from './Store';

const App = () => (
  <Provider store={store}>
    <div>
      <CounterComponent counterName='counter1' />
      <CounterComponent counterName='counter2' />
      <SumOfCounters />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
