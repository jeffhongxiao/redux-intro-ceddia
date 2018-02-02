import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.name = this.props.counterName;
  }

  render() {
    return (
      <div>
        <h2>{this.name}: </h2>
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
