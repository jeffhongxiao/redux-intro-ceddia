import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  state = { count: 0 }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);
