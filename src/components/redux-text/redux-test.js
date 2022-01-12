import React from "react";

import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "../../Redux/Counter/counter.actions";

const ReduxTest = ({ count, increaseCounter, decreaseCounter }) => {
  return (
    <div>
      <div>Count: {count}</div>

      <button onClick={() => increaseCounter()}>Increase Count</button>

      <button onClick={() => decreaseCounter()}>Decrease Count</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
