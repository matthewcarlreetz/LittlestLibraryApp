import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Library } from "../redux/library/types";
import { StyleProvider, Container, Content, Root } from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";

export interface ConnectProps {
    location: Position;
    hasPermission: boolean;
    askLocationPermission: () => any;
    requestLocation: () => any;
}

interface State {
}

export default class LibraryDetail extends Component<ConnectProps, State> {
    render() {
        let location = "Add Library";
        if (this.props.location != null) {
            location = this.props.location.coords.latitude +
                " <==> " + this.props.location.coords.longitude;
        }

        return (
            <Root>
                <StyleProvider style={getTheme(platform)}>
                    <Container>
                        <Content>
                            <Text>{location}
                            </Text>
                        </Content>
                    </Container>

                </StyleProvider>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
});
