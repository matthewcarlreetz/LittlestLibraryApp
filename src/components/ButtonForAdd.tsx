import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";
import * as LibraryActions from "../redux/library/actions";

interface DispatchProps {
    addLibrary: () => any;
}

class ButtonForAdd extends Component<{} & DispatchProps, AppState> {
    render() {
        return (
            < Button transparent light
                onPress={() => this.props.addLibrary()
                } >
                <Icon name="add" />
            </Button >
        );
    }

}

export default connect<{}, DispatchProps>(
    (state: AppState) => ({
    }),
    (dispatch: Dispatch) => ({
        addLibrary: () =>
            dispatch(LibraryActions.addLibrary())
    })
)(ButtonForAdd);
