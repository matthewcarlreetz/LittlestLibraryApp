import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Library } from "../redux/library/types";
import LLButton from "./LLButton";
import {
    StyleProvider, Container
} from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";

export interface ConnectProps {
    imageData: string;
}

interface State {
}

export default class LibraryDetail extends Component<ConnectProps, State> {
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <View style={styles.container}>
                        <Image
                            style={styles.preview}
                            source={{ uri: "data:image/png;base64," + this.props.imageData }}
                        />
                        <View style={styles.userArea}>
                            <Text style={styles.explanation}>An explanation of what to do</Text>
                            <LLButton
                                text="Confirm"
                                style={styles.button}
                            />
                        </View>
                    </View>
                </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    preview: {
        aspectRatio: 1
    },
    userArea: {
        flexGrow: 1
    },
    button: {
        flex: 0,
        margin: 16,
        marginTop: 48
    },
    explanation: {
        margin: 16,
        alignItems: "center",
        textAlign: "center"
    }
});
