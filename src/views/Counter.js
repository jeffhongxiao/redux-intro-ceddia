import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.counterName}: </h2>
        <div>
          <span>{this.props.count}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    count: state['count'][ownProps.counterName]
  }
}

export default connect(mapStateToProps)(Counter);
