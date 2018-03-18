import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import * as CounterActions from "../redux/counter/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";

interface ConnectProps {
  count: number;
}

interface DispatchProps {
  decrement: () => any;
  decrement_async: () => any;
  login: () => any;
}

class CounterContainer extends Component<ConnectProps & DispatchProps, {}> {
  intervalId: number;

  constructor(props) {
    super(props);
  }

  render() {
    return <Counter {...this.props} />;
  }
}

export default connect<ConnectProps, DispatchProps>(
  (state: AppState) => ({
    count: state.counter.count,
    sometthing: 0
  }),
  (dispatch: Dispatch) => ({
    decrement: () => dispatch(CounterActions.decrement()),
    decrement_async: () => dispatch(CounterActions.decrementAsync()),
    login: () => dispatch(CounterActions.login())
  })
)(CounterContainer);
