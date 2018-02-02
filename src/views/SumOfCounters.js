import React from 'react';
import { connect } from 'react-redux';

class SumOfCounters extends React.Component {
  render() {
    return (
      <div>
        <h2>Sum of all counters: </h2>
        <div>{this.props.sum}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sum: calculateSum(state)
  }
}

function calculateSum(state) {
  let sum = 0;

  for (const key in state) {
    sum = sum + state[key];
  }

  return sum;
}

export default connect(mapStateToProps)(SumOfCounters);
