import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { bindActionCreators } from "redux";
import Login from "../components/Login";
import * as LoginActions from "../redux/login/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import { UIState } from "../redux/ui/types";

interface ConnectProps {
  showSuccess: boolean;
  loading: boolean;
  emailError: string;
  passwordError: string;
  authError: string;
  token: string;
}

interface DispatchProps {
  login: (email: string, password: string) => any;
  clearErrors: () => void;
  getStoredToken: () => void;
  skipLogin: (token: string) => void;
}

class LoginContainer extends Component<ConnectProps & DispatchProps, {}> {
  private loginSkipped = false;

  constructor(props) {
    super(props);
    this.state = {
      email: "", password: ""
    };
    this.props.getStoredToken();
  }

  componentWillUpdate(nextProps) {
    if (!this.loginSkipped) {
      this.loginSkipped = true;
      const next = nextProps as ConnectProps;
      if (next.token !== undefined && next.token !== "") {
        console.log("token", next.token);
        this.props.skipLogin(next.token);
      }
    }
  }

  render() {
    return <Login {...this.props} />;
  }
}

export default connect<ConnectProps, DispatchProps>(
  (state: AppState) => ({
    showSuccess: state.user.loggedIn,
    loading: state.ui.uiState === UIState.LOADING,
    emailError: state.user.emailError,
    passwordError: state.user.passwordError,
    authError: state.user.authError,
    token: state.user.token
  }),
  (dispatch: Dispatch) => ({
    login: (email: string, password: string) =>
      dispatch(LoginActions.login(email, password)),
    clearErrors: () =>
      dispatch(LoginActions.clearErrors()),
    getStoredToken: () =>
      dispatch(LoginActions.getStoredToken()),
    skipLogin: (token: string) =>
      dispatch(LoginActions.skipLogin(token))
  })
)(LoginContainer);
