import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as LibraryActions from "../redux/library/actions";
import LibraryDetail from "../components/LibraryDetail";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux/types";
import { Library } from "../redux/library/types";

interface ConnectProps {
    library: Library;
}

interface DispatchProps {
}

class LibraryDetailContainer extends Component<ConnectProps & DispatchProps, AppState> {
    render() {
        return <LibraryDetail {...this.props} />;
    }
}

export default connect<ConnectProps, DispatchProps>(
    (state: AppState) => ({
        library: state.libraries.selectedLibrary
    }),
    (dispatch: Dispatch) => ({
    })
)(LibraryDetailContainer);
