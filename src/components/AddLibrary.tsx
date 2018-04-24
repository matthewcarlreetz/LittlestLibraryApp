import React, { Component } from "react";
import { Library } from "../redux/library/types";
import { StyleProvider, Container, Content, Root, Button } from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";
import { RNCamera } from "react-native-camera";
import LLButton from "./LLButton";
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { imageCaptured } from "../redux/library/actions";

export interface ConnectProps {
    location: Position;
    hasPermission: boolean;
    loading: boolean;
    askLocationPermission: () => any;
    requestLocation: () => any;
    imageCaptured: (imageData: string) => any;
    imageCaptureStarted: () => any;
}

interface State {
}

export default class LibraryDetail extends Component<ConnectProps, State> {
    camera: RNCamera;

    render() {
        return (
            <Root>
                <StyleProvider style={getTheme(platform)}>
                    <Container>
                        <View style={styles.container}>
                            <RNCamera
                                ref={ref => {
                                    this.camera = ref;
                                }}
                                style={styles.preview}
                                type={RNCamera.Constants.Type.back}
                                flashMode={RNCamera.Constants.FlashMode.on}
                                permissionDialogTitle={"Permission to use camera"}
                                permissionDialogMessage={"We need your permission to use your camera phone"}
                            />
                            <View style={styles.userArea}>
                                <Text style={styles.explanation}>An explanation of what to do</Text>
                                <LLButton
                                    onPress={this.takePicture()}
                                    text="Capture"
                                    style={styles.button}
                                    disabled={this.props.loading}
                                />
                            </View>
                        </View>
                    </Container>
                </StyleProvider>
            </Root >
        );
    }

    takePicture = () => () => {
        if (this.props.hasPermission && this.camera) {
            this.props.imageCaptureStarted();
            this.camera.takePictureAsync({ quality: 0.5, base64: true })
                .then((data) => {
                    this.props.imageCaptured(data.base64);
                    this.props.requestLocation();
                })
                .catch((err: any) => console.error(err));
        }
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
