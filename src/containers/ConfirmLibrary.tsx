import React, { Component } from "react";
import { connect, Connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import ConfirmLibrary from "../components/ConfirmLibrary";
import * as  LibraryActions from "../redux/library/actions";

export interface ConnectProps {
    imageData: string;
    lat: number;
    lon: number;
    token: string;
}

interface DispatchProps {
    upload: (token: string, lat: number, lon: number, imageData: string) => any;
}

class ConfirmLibraryContainer extends Component<ConnectProps & DispatchProps, AppState> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Confirm"
        };
    }

    render() {
        return <ConfirmLibrary {...this.props} />;
    }
}

export default connect<ConnectProps, DispatchProps>(
    (state: AppState) => ({
        imageData: state.libraries.libraryToAdd.imageData,
        lat: state.location.latestLocation.coords.latitude,
        lon: state.location.latestLocation.coords.longitude,
        token: state.user.token
    }),
    (dispatch: Dispatch) => ({
        upload: (token: string, lat: number, lon: number, imageData: string) => dispatch(LibraryActions.uploadLibrary(token, lat, lon, imageData))
    })
)(ConfirmLibraryContainer);
