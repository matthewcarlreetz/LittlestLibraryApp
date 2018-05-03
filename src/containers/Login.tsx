import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Login from "../components/Login";
import * as LoginActions from "../redux/login/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";

interface ConnectProps {
  showSuccess: boolean;
  loading: boolean;
  emailError: string;
  passwordError: string;
  authError: string;
}

interface DispatchProps {
  login: (email: string, password: string) => any;
  clearErrors: () => void;
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
    showSuccess: state.user.loggedIn,
    loading: state.ui.loading,
    emailError: state.user.emailError,
    passwordError: state.user.passwordError,
    authError: state.user.authError
  }),
  (dispatch: Dispatch) => ({
    login: (email: string, password: string) =>
      dispatch(LoginActions.login(email, password)),
    clearErrors: () =>
      dispatch(LoginActions.clearErrors())
  })
)(LoginContainer);
