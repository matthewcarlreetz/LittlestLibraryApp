import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Login from "../components/Login";
import * as LoginActions from "../redux/login/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";

interface DispatchProps {
  login: () => any;
}

class LoginContainer extends Component<{} & DispatchProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return <Login {...this.props} />;
  }
}

export default connect<{}, DispatchProps>(
  (state: AppState) => ({}),
  (dispatch: Dispatch) => ({
    login: () => dispatch(LoginActions.login())
  })
)(LoginContainer);
