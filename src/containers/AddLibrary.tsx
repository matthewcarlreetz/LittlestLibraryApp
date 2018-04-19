import React, { Component } from "react";
import AddLibrary from "../components/AddLibrary";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import Permissions from "react-native-permissions";

interface ConnectProps {
    location: Position;
}

interface DispatchProps {
}

class LibraryListContainer extends Component<ConnectProps & DispatchProps, AppState> {
    componentDidMount() {

        Permissions.check("location").then(response => {
            console.log(response);
            navigator.geolocation.getCurrentPosition(location => {
                console.log(location);
            });
        });
    }

    render() {
        return <AddLibrary {...this.props} />;
    }
}

export default connect<ConnectProps, DispatchProps>(
    (state: AppState) => ({
        location: null
    }),
    (dispatch: Dispatch) => ({
    })
)(LibraryListContainer);
