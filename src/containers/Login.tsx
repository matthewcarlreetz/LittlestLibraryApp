import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Login from "../components/Login";
import * as LoginActions from "../redux/login/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";

interface ConnectProps {
  email: string;
  password: string;
}

interface DispatchProps {
  login: (email: string, password: string) => any;
}

class LoginContainer extends Component<ConnectProps & DispatchProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return <Login {...this.props} />;
  }
}

export default connect<ConnectProps, DispatchProps>(
  (state: AppState) => ({
    email: state.auth.email,
    password: state.auth.password
  }),
  (dispatch: Dispatch) => ({
    login: (email: string, password: string) =>
      dispatch(LoginActions.login({ email, password }))
  })
)(LoginContainer);
