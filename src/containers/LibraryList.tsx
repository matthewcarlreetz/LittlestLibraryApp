import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as LibraryActions from "../redux/library/actions";
import LibraryList from "../components/LibraryList";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";
import { Library } from "../models/library";

interface ConnectProps {
    libraries: [Library];
    token: string;
}

interface DispatchProps {
    loadLibraries: (token: string) => any;
}

class LibraryListContainer extends Component<ConnectProps & DispatchProps, AppState> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadLibraries(this.props.token);
    }

    render() {
        return <LibraryList {...this.props} />;
    }
}

export default connect<ConnectProps, DispatchProps>(
    (state: AppState) => ({
        token: state.user.token,
        libraries: state.libraries.libraries
    }),
    (dispatch: Dispatch) => ({
        loadLibraries: (token: string) =>
            dispatch(LibraryActions.getLibraries(token))
    })
)(LibraryListContainer);
