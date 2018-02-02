import React from 'react';

import Counter from './Counter';
import CounterButtons from './CounterButtons';

class CounterComponent extends React.Component {
  render() {
    return (
      <div>
        <Counter counterName={this.props.counterName} />
        <CounterButtons counterName={this.props.counterName} />
      </div>
    )
  }
}

export default CounterComponent;
