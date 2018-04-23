import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";
import LLButton from "./LLButton";
import {
  Container, Header, Content, Form, Item, Input, Label, Icon, Button, H1, H3, Toast, Root
} from "native-base";

interface Props {
  email: string;
  showSuccess: boolean;
  login: (email: string, password: string) => any;
  loading: boolean;
}

interface State {
  email: string;
  password: string;
}

export default class LoginComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email, password: ""
    };
  }

  render() {
    return (
      <Root>
        <StyleProvider style={getTheme(platform)}>
          <Container>
            <Content style={styles.content}>
              <Image source={require("../../assets/books.png")} style={styles.bookIcon} />
              <H1 style={{ fontWeight: "bold" }}>Littlest Library</H1>
              <Text style={styles.shareText}>Share the love!</Text>
              <Form>
                <Item floatingLabel style={styles.item}>
                  <Label>Email</Label>
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    // value={this.state.email}
                    value={"matt.reetz@zymo.io"}
                    onChangeText={text => this.setState({ email: text })}
                  />
                </Item>
                <Item floatingLabel style={styles.item}>
                  <Label>Password</Label>
                  <Input
                    value={"abcd1234"}
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })}
                  />
                </Item>
              </Form>
              <View style={styles.helpContainer}>
                <View style={styles.buttonContainer}>
                  <Button style={styles.signupButton} block transparent info>
                    <Text>Sign up</Text>
                  </Button>
                </View>
                <View style={styles.buttonContainer}>
                  <Button style={styles.forgotButton} block transparent info>
                    <Text>Forgot Password?</Text>
                  </Button>
                </View>
              </View>
              <LLButton
                onPress={() => this.props.login(this.state.email, this.state.password)}
                text="Login"
                style={styles.button}
                disabled={this.props.loading}
              />
            </Content>
          </Container>
        </StyleProvider>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 24,
    marginRight: 24,
    marginTop: 48
  },
  bookIcon: {
    marginBottom: 48,
    height: 64,
    width: 64
  },
  shareText: { marginBottom: 40, marginTop: 0, paddingTop: 8 },
  item: { marginRight: 16, marginLeft: 0, paddingTop: 16 },
  signupButton: {
    justifyContent: "flex-start"
  },
  forgotButton: {
    justifyContent: "flex-end"
  },
  button: {
    margin: 16,
    marginTop: 48
  },
  textContent: {
    fontSize: 20,
    color: "white"
  },
  helpContainer: {
    flex: 1,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1
  }
});
