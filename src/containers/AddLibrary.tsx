import React, { Component } from "react";
import AddLibrary from "../components/AddLibrary";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import * as LocationActions from "../redux/location/actions";
import Permissions from "react-native-permissions";

export interface ConnectProps {
    location: Position;
    hasPermission: boolean;
}

interface DispatchProps {
    askLocationPermission: () => any;
    requestLocation: () => any;
}

class AddLibraryContainer extends Component<ConnectProps & DispatchProps, AppState> {
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
        hasPermission: state.location.hasPermission
    }),
    (dispatch: Dispatch) => ({
        askLocationPermission: () =>
            dispatch(LocationActions.askPermission()),
        requestLocation: () =>
            dispatch(LocationActions.requestLocation())
    })
)(AddLibraryContainer);
