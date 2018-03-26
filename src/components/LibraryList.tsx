import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";
import { Library } from "../models/library";

interface Props {
    libraries: [Library];
}

interface State {
    libraries: [Library];
}

export default class LibraryList extends Component<Props, State> {
    render() {
        return (
            <View>
                <Text>{this.props.libraries ? this.props.libraries[0].address : "no libraries"}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
