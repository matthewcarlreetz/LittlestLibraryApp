import React, { Component } from "react";
import AddLibrary from "../components/AddLibrary";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";

interface ConnectProps {
}

interface DispatchProps {
}

class LibraryListContainer extends Component<ConnectProps & DispatchProps, AppState> {
    render() {
        return <AddLibrary {...this.props} />;
    }
}

export default connect<ConnectProps, DispatchProps>(
    (state: AppState) => ({
    }),
    (dispatch: Dispatch) => ({
    })
)(LibraryListContainer);
