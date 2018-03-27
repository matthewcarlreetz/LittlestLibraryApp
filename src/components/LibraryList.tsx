import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";
import { Library } from "../models/library";
import { Container, Content, List, ListItem, Left, Thumbnail, Body, Right, Text, Spinner, Header, Title } from "native-base";

interface Props {
    libraries: [Library];
}

export default class LibraryList extends Component<Props, {}> {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Libraries</Title>
                    </Body>
                </Header>
                <Content>
                    {this.props.libraries && this.props.libraries.length > 0 ?
                        <List dataArray={this.props.libraries} renderRow={(item: Library) =>
                            <ListItem avatar style={{ height: 80 }}>
                                <Left>
                                    <Thumbnail source={require("../../assets/library.jpg")} />
                                </Left>
                                <Body>
                                    <Text>{item.address}</Text>
                                    <Text note>{item.city} {item.state}  {item.zip}</Text>
                                </Body>
                            </ListItem>} />
                        : <Spinner />}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
});
