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
  login: (email: string, password: string) => any;
  validate: (email: string, password: string) => any;
  loading: boolean;
  emailError: string;
  passwordError: string;
}

interface State {
  email: string;
  password: string;
  // emailError: string;
  // passwordError: string;
}

export default class LoginComponent extends Component<Props, State> {
  private animationCheckedDone: Animation;
  private fadeOut = new Animated.Value(1);
  private fadeIn = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.state = {
      email: "", password: ""/*, emailError: "", passwordError: ""*/
    };
  }

  componentDidUpdate() {
    if (this.animationCheckedDone) {
      this.animationCheckedDone.play();
    }

    if (this.props.loading) {
      Animated.timing(this.fadeOut, {
        toValue: this.props.loading ? 0.5 : 1,
        duration: 300,
      }).start();

      Animated.timing(this.fadeIn, {
        toValue: this.props.loading ? 1.0 : 0,
        duration: 300,
      }).start();
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps");
  //   this.setState({
  //     email: "", password: "", emailError: nextProps.emailError, passwordError: nextProps.passwordError
  //   });
  // }

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
                    value={this.state.email}
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={email => {
                      this.setState({ email });
                      this.props.validate(email, this.state.password);
                    }}
                  />
                </Item>
                <Text style={styles.validation}>{this.props.emailError}</Text>
                <Item floatingLabel style={styles.item}>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => {
                      this.setState({ password });
                      this.props.validate(this.state.email, password);
                    }}
                  />
                </Item>
                <Text style={styles.validation}>{this.props.passwordError}</Text>
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

              <Animated.View style={{ opacity: this.fadeOut }}>
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
                  opacity: this.fadeIn,
                  width: 327,
                  height: 100, alignItems: "center", justifyContent: "center"
                }}>
                  <Animation
                    ref={(animation: Animation) => {
                      this.animationCheckedDone = animation;
                    }}
                    loop={true}
                    source={require("../../assets/anim/loading.json")}
                  />
                </Animated.View>
              }
            </Content>
          </Container>
        </StyleProvider>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  validation: { color: platform.brandDanger },
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
