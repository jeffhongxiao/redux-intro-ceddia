import React from 'react';
import { connect } from 'react-redux';

class CounterButtons extends React.Component {

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'});
  }

  decrement= () => {
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

function mapStateToProps(state) {
  return {
    // empty. just for this.props.dispatch() in functions
  }
}

export default connect(mapStateToProps)(CounterButtons);
