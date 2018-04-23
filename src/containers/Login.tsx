import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Login from "../components/Login";
import * as LoginActions from "../redux/login/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";

interface ConnectProps {
  email: string;
  showSuccess: boolean;
  loading: boolean;
}

interface DispatchProps {
  login: (email: string, password: string) => any;
}

class LoginContainer extends Component<ConnectProps & DispatchProps, {}> {

  render() {
    return <Login {...this.props} />;
  }
}

export default connect<ConnectProps, DispatchProps>(
  (state: AppState) => ({
    email: state.user.email,
    showSuccess: state.user.loggedIn,
    loading: state.ui.loading
  }),
  (dispatch: Dispatch) => ({
    login: (email: string, password: string) =>
      dispatch(LoginActions.login(email, password))
  })
)(LoginContainer);
