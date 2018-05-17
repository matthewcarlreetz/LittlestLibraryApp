import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Library } from "../redux/library/types";
import LLButton from "./LLButton";
import {
    StyleProvider, Container
} from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";
import Animation from "lottie-react-native";
import { UIState } from "../redux/ui/types";

export interface ConnectProps {
    imageData: string;
    lat: number;
    lon: number;
    token: string;
    uiState: UIState;
    errorMessage: string;
    upload: (token: string, lat: number, lon: number, imageData: string) => any;
    finished: () => any;
}

interface State {
}

export default class LibraryDetail extends Component<ConnectProps, State> {
    private animationCheckedDone: Animation;

    componentDidMount() {
        if (this.animationCheckedDone) {
            this.animationCheckedDone.play();
        }
    }

    componentDidUpdate() {
        if (this.animationCheckedDone) {
            this.animationCheckedDone.play();
        }
    }

    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <View style={styles.container}>
                        <Image
                            style={styles.preview}
                            source={{ uri: this.props.imageData }}
                        />

                        <View style={styles.userArea}>
                            {
                                this.props.uiState === UIState.LOADING &&
                                <Animation
                                    ref={(animation: Animation) => {
                                        this.animationCheckedDone = animation;
                                    }}
                                    loop={true}
                                    source={require("../../assets/anim/animation-w800-h600.json")}
                                />
                            }
                            {
                                (this.props.uiState === UIState.SHOW_SUCCESS) &&
                                <Animation
                                    ref={(animation: Animation) => {
                                        if (animation != null) {
                                            animation.play();
                                            setTimeout(() => {
                                                this.props.finished();
                                            }, 1500);
                                        }
                                    }}
                                    loop={false}
                                    source={require("../../assets/anim/success.json")}
                                />
                            }
                            {
                                (this.props.uiState === UIState.SHOW_FAIL) &&
                                <View style={styles.container}>
                                    <View style={styles.userArea}>
                                        <Animation
                                            ref={(animation: Animation) => {
                                                if (animation != null) {
                                                    animation.play();
                                                    setTimeout(() => {
                                                        this.props.finished();
                                                    }, 4000);
                                                }
                                            }}
                                            loop={false}
                                            source={require("../../assets/anim/fail.json")}
                                        />
                                    </View>
                                    <Text style={styles.explanation}>{this.props.errorMessage}</Text>
                                </View>
                            }
                            {
                                this.props.uiState === UIState.NONE &&
                                <View>
                                    <Text style={styles.explanation}>An explanation of what to do</Text>
                                    <LLButton
                                        text="Confirm"
                                        onPress={() => this.props.upload(this.props.token, this.props.lat, this.props.lon, this.props.imageData)}
                                        style={styles.button}
                                    />
                                </View>
                            }
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
