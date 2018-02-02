import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


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
      const key = 'counter1'; // TODO: change it
      dispatch(Actions.increment(key));
    },
    onDecrement: () => {
      const key = 'counter2'; // TODO: change it
      dispatch(Actions.decrement(key));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterButtons);
