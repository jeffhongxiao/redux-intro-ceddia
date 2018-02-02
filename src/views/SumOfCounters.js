import React from 'react';
import { connect } from 'react-redux';

class SumOfCounters extends React.Component {
  render() {
    return (
      <div>
        <h2>Sum of all counters: </h2>
        <div>TBA</div>
      </div>
    );
  }
}

export default connect()(SumOfCounters);
