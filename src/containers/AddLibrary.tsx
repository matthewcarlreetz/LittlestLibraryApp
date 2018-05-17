import React, { Component } from "react";
import AddLibrary from "../components/AddLibrary";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import { UIState } from "../redux/ui/types";
import * as LocationActions from "../redux/location/actions";
import * as  LibraryActions from "../redux/library/actions";
import Permissions from "react-native-permissions";

export interface ConnectProps {
    location: Position;
    hasPermission: boolean;
    loading: boolean;
}

interface DispatchProps {
    askLocationPermission: () => any;
    requestLocation: () => any;
    imageCaptured: (imageData: string) => any;
    imageCaptureStarted: () => any;
}

class AddLibraryContainer extends Component<ConnectProps & DispatchProps, AppState> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Add"
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.hasPermission) {
            this.props.askLocationPermission();
        } else if (!nextProps.location) {
            this.props.requestLocation();
        }
    }

    componentDidMount() {
        if (!this.props.hasPermission) {
            this.props.askLocationPermission();
        } else {
            this.props.requestLocation();
        }
    }

    render() {
        return <AddLibrary {...this.props} />;
    }
}

export default connect<ConnectProps, DispatchProps>(
    (state: AppState) => ({
        location: state.location.latestLocation,
        hasPermission: state.location.hasPermission,
        loading: state.ui.uiState === UIState.LOADING
    }),
    (dispatch: Dispatch) => ({
        askLocationPermission: () =>
            dispatch(LocationActions.askPermission()),
        requestLocation: () =>
            dispatch(LocationActions.requestLocation()),
        imageCaptureStarted: () =>
            dispatch(LibraryActions.imageCaptureStarted()),
        imageCaptured: (imageData: string) =>
            dispatch(LibraryActions.imageCaptured(imageData))
    })
)(AddLibraryContainer);
