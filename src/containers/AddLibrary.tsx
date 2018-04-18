import React, { Component } from "react";
import AddLibrary from "../components/AddLibrary";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";

interface ConnectProps {
    location: Position;
}

interface DispatchProps {
}

class LibraryListContainer extends Component<ConnectProps & DispatchProps, AppState> {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(location => {
            console.log(location);
            // need to create a redux store for location
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
