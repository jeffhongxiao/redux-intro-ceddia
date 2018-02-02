import React from 'react';

import Counter from './Counter';
import CounterButtons from './CounterButtons';

class CounterComponent extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <CounterButtons />
      </div>
    )
  }
}

export default CounterComponent;
