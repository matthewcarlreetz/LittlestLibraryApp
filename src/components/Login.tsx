import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import { StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";
import LLButton from "./LLButton";
import {
  Container, Header, Content, Form, Item, Input, Label, Icon, Button, H1, H3, Toast, Root
} from "native-base";
import Animation from "lottie-react-native";

interface Props {
  email: string;
  showSuccess: boolean;
  login: (email: string, password: string) => any;
  loading: boolean;
}

interface State {
  email: string;
  password: string;
  fadeOut: Animated.Value;
  fadeIn: Animated.Value;
}

export default class LoginComponent extends Component<Props, State> {
  private animationCheckedDone: any;

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email, password: "", fadeOut: new Animated.Value(1), fadeIn: new Animated.Value(0)
    };
  }

  componentDidUpdate() {
    if (this.animationCheckedDone) {
      this.animationCheckedDone.play();
    }

    if (this.props.loading) {
      Animated.timing(this.state.fadeOut, {
        toValue: 0.5,
        duration: 300,
      }).start();

      Animated.timing(this.state.fadeIn, {
        toValue: 1.0,
        duration: 300,
      }).start();
    }
  }

  render() {
    return (
      <Root>
        <StyleProvider style={getTheme(platform)}>
          <Container>
            <View style={styles.content}>
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
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item floatingLabel style={styles.item}>
                  <Label>Password</Label>
                  <Input
                    value={"abcd1234"}
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
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

              <Animated.View style={{ opacity: this.state.fadeOut }}>
                <LLButton
                  onPress={() => this.props.login(this.state.email, this.state.password)}
                  text="Login"
                  style={styles.button}
                  disabled={this.props.loading}
                />
              </Animated.View>
              {
                this.props.loading &&
                <Animated.View style={{
                  opacity: this.state.fadeIn,
                  width: 327,
                  height: 100, alignItems: "center", justifyContent: "center"
                }}>
                  <Animation
                    ref={(animation: any) => {
                      this.animationCheckedDone = animation;
                    }}
                    loop={true}
                    source={require("../../assets/anim/loading.json")}
                  />
                </Animated.View>
              }
            </View>
          </Container>
        </StyleProvider>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
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
  },
  loading: { resizeMode: "contain", height: 100, width: 300 }
});
