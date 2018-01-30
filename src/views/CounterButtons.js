import React from 'react';
import { connect } from 'react-redux';

import * as ActionTypes from '../ActionTypes';

import './CounterButton.css';

class CounterButtons extends React.Component {

  increment = () => {
    this.props.dispatch({
      type: ActionTypes.INCREMENT
    });
  }

  decrement = () => {
    this.props.dispatch({
      type: ActionTypes.DECREMENT
    });
  }

  render() {
    return (
      <div>
        <button className="increaseButton" onClick={this.increment}>Increase</button>
        <button className="decreaseButton" onClick={this.decrement}>Decrease</button>
      </div>
    );
  }
}

// Inject just dispatch and don't listen to store
export default connect()(CounterButtons);
