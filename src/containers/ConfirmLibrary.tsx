import React, { Component } from "react";
import { connect, Connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import ConfirmLibrary from "../components/ConfirmLibrary";
import * as  LibraryActions from "../redux/library/actions";
import { UIState } from "../redux/ui/types";

export interface ConnectProps {
    imageData: string;
    lat: number;
    lon: number;
    token: string;
    uiState: UIState;
    errorMessage: string;
}

interface DispatchProps {
    upload: (token: string, lat: number, lon: number, imageData: string) => any;
    finished: () => any;
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
        token: state.user.token,
        uiState: state.ui.uiState,
        errorMessage: state.ui.message
    }),
    (dispatch: Dispatch) => ({
        upload: (token: string, lat: number, lon: number, imageData: string) => dispatch(LibraryActions.uploadLibrary(token, lat, lon, imageData)),
        finished: () => dispatch(LibraryActions.addLibraryComplete())
    })
)(ConfirmLibraryContainer);
