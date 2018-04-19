import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { StyleProvider, Fab, Icon, Button } from "native-base";
import { Library } from "../redux/library/types";
import { Container, Content, Body, Root, Text, H1, ActionSheet } from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";
const BUTTONS = ["Get Directions", "Report Image Inappropriate", "Report Invalid Location", "Cancel"];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 3;

interface Props {
    library: Library;
}
interface State {
}

export default class LibraryDetail extends Component<Props, State> {
    render() {
        return (
            <Root>
                <StyleProvider style={getTheme(platform)}>
                    <Container>
                        <Content>
                            <Image source={require("../../assets/library.jpg")} style={styles.libraryImage} />
                            <View style={styles.divider} />
                            <View style={styles.body}>
                                <View style={styles.address}>
                                    <Text style={styles.street}>{this.props.library.address}</Text>
                                    <Text style={styles.city}>{this.props.library.city}, {this.props.library.state} {this.props.library.zip}</Text>
                                </View>
                                <Icon name="" ios="ios-more" android="md-more" style={styles.actionButton}
                                    onPress={() =>
                                        ActionSheet.show(
                                            {
                                                options: BUTTONS,
                                                cancelButtonIndex: CANCEL_INDEX,
                                                destructiveButtonIndex: DESTRUCTIVE_INDEX
                                            },
                                            buttonIndex => {
                                                this.setState({ clicked: BUTTONS[buttonIndex] });
                                            }
                                        )}
                                />
                            </View>
                            <View style={styles.divider} />
                        </Content>
                    </Container>

                </StyleProvider>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "white",
        flexDirection: "row"
    },
    libraryImage: {
        flex: 1,
        width: null,
        backgroundColor: "black",
        height: null,
        aspectRatio: 1
    },
    divider: {
        height: 1,
        flex: 1,
        backgroundColor: "rgba(45, 54, 64, 0.3)"
    },
    city: {
        fontSize: 12
    },
    street: {
        fontWeight: "bold",
        fontSize: 12
    },
    actionButton: {
        fontSize: 24,
        padding: 16
    },
    address: {
        alignSelf: "center",
        paddingLeft: 12,
        flex: 1
    }
});
