import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import './CounterButton.css';
import * as Actions from '../Actions.js';

class CounterButtons extends React.Component {
  render() {
    return (
      <div>
        <button className="increaseButton" onClick={this.props.onIncrement}>Increase: {this.props.counterName}</button>
        <button className="decreaseButton" onClick={this.props.onDecrement}>Decrease</button>
      </div>
    );
  }
}

CounterButtons.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

const mapStateToProps = () => {
  return {

  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.counterName));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.counterName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterButtons);
