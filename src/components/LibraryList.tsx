import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Library } from "../redux/library/types";
import {
    Container, Content, List, ListItem, Left, Thumbnail, Body,
    Right, Text, Spinner, Header, Title
} from "native-base";
import { showDetail } from "../redux/library/actions";
import { baseUrl } from "../api/envVars";

interface Props {
    libraries: [Library];
    showDetail: (library: Library) => any;
}

export default class LibraryList extends Component<Props, {}> {
    render() {
        return (
            <Container>
                <Content>
                    {this.props.libraries ? (
                        <List
                            dataArray={this.props.libraries}
                            renderRow={(item: Library) => (
                                <ListItem
                                    avatar
                                    style={{ height: 80 }}
                                    onPress={() => {
                                        this.props.showDetail(item);
                                    }}
                                >
                                    <Left>
                                        <Thumbnail source={{ uri: (baseUrl + item.image.url) }} />
                                    </Left>
                                    <Body>
                                        <Text>{item.address}</Text>
                                        <Text note>
                                            {item.city} {item.state} {item.zip}
                                        </Text>
                                    </Body>
                                </ListItem>
                            )}
                        />
                    ) : (
                            <Spinner />
                        )}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
