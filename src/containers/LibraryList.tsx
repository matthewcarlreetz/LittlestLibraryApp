import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { bindActionCreators } from "redux";
import * as LibraryActions from "../redux/library/actions";
import * as LocationActions from "../redux/location/actions";
import LibraryList from "../components/LibraryList";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import { Library } from "../redux/library/types";
import ButtonForAdd from "../components/ButtonForAdd";

interface ConnectProps {
  libraries: [Library];
  token: string;
  navigation: any;
  location: Position;
}

interface DispatchProps {
  loadLibraries: (token: string, lat: number, lon: number) => any;
  showDetail: (library: Library) => any;
  requestLocation: () => any;
}

class LibraryListContainer extends Component<ConnectProps & DispatchProps, AppState> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <ButtonForAdd />,
      title: "Littlest Library"
    };
  }

  componentDidMount() {
    this.props.requestLocation();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location && !this.props.libraries) {
      const coords = this.props.location.coords;
      this.props.loadLibraries(this.props.token, coords.latitude, coords.longitude);
    }
  }

  render() {
    return <LibraryList {...this.props} />;
  }
}

export default connect<ConnectProps, DispatchProps>(
  (state: AppState) => ({
    token: state.user.token,
    libraries: state.libraries.libraries,
    navigation: state.nav,
    location: state.location.latestLocation
  }),
  (dispatch: Dispatch) => ({
    requestLocation: () =>
      dispatch(LocationActions.requestLocation()),
    loadLibraries: (token: string, lat: number, lon: number) =>
      dispatch(LibraryActions.getLibraries(token, lat, lon)),
    showDetail: (library: Library) =>
      dispatch(LibraryActions.showDetail(library))
  })
)(LibraryListContainer);
