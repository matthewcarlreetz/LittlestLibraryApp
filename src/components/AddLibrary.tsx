import React, { Component } from "react";
import { Library } from "../redux/library/types";
import { StyleProvider, Container, Content, Root } from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";
import { RNCamera } from "react-native-camera";
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export interface ConnectProps {
    location: Position;
    hasPermission: boolean;
    askLocationPermission: () => any;
    requestLocation: () => any;
}

interface State {
}

export default class LibraryDetail extends Component<ConnectProps, State> {
    camera: RNCamera;

    render() {
        return (
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
                <View style={{ flex: 0, flexDirection: "row", justifyContent: "center", }}>
                    <TouchableOpacity
                        onPress={this.takePicture.bind(this)}
                        style={styles.capture}
                    >
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    takePicture() {
        if (this.camera) {
            this.camera.takePictureAsync({ quality: 0.5, base64: true })
                .then((data) => console.log(data))
                .catch((err: any) => console.error(err));
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black"
    },
    preview: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    capture: {
        flex: 0,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: "center",
        margin: 20
    }
});
