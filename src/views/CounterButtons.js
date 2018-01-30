import React from 'react';
import { connect } from 'react-redux';

class CounterButtons extends React.Component {

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'});
  }

  decrement = () => {
    this.props.dispatch({type: 'DECREMENT'});
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
      </div>
    );
  }
}

// Inject just dispatch and don't listen to store
export default connect()(CounterButtons);
