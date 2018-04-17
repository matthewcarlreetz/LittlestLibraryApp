import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Library } from "../models/library";
import { StyleProvider, Container, Content, Root } from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";

interface Props {
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
                            <Text>Add</Text>
                        </Content>
                    </Container>

                </StyleProvider>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
});
