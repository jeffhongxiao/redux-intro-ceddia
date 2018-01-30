import React from 'react';
import { connect } from 'react-redux';

import './CounterButton.css';
import * as Actions from '../Actions.js';

class CounterButtons extends React.Component {
  render() {
    return (
      <div>
        <button className="increaseButton" onClick={this.props.onIncrement}>Increase</button>
        <button className="decreaseButton" onClick={this.props.onDecrement}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => {
      dispatch(Actions.increment());
    },
    onDecrement: () => {
      dispatch(Actions.decrement());
    }
  }
}

// Inject just dispatch and don't listen to store
export default connect(mapStateToProps, mapDispatchToProps)(CounterButtons);
