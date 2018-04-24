import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import ConfirmLibrary from "../components/ConfirmLibrary";

export interface ConnectProps {
    imageData: string;
}

interface DispatchProps {
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
        imageData: state.libraries.libraryToAdd.imageData
    }),
    (dispatch: Dispatch) => ({
    })
)(ConfirmLibraryContainer);
