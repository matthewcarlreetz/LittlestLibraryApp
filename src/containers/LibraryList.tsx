import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { bindActionCreators } from "redux";
import * as LibraryActions from "../redux/library/actions";
import LibraryList from "../components/LibraryList";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import { Library } from "../redux/library/types";
import ButtonForAdd from "../components/ButtonForAdd";

interface ConnectProps {
  libraries: [Library];
  token: string;
  navigation: any;
}

interface DispatchProps {
  loadLibraries: (token: string) => any;
  showDetail: (library: Library) => any;
}

class LibraryListContainer extends Component<ConnectProps & DispatchProps, AppState> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <ButtonForAdd />,
      title: "Littlest Library"
    };
  }

  componentDidMount() {
    this.props.loadLibraries(this.props.token);
  }

  render() {
    return <LibraryList {...this.props} />;
  }
}

export default connect<ConnectProps, DispatchProps>(
  (state: AppState) => ({
    token: state.user.token,
    libraries: state.libraries.libraries,
    navigation: state.nav
  }),
  (dispatch: Dispatch) => ({
    loadLibraries: (token: string) =>
      dispatch(LibraryActions.getLibraries(token)),
    showDetail: (library: Library) =>
      dispatch(LibraryActions.showDetail(library))
  })
)(LibraryListContainer);
