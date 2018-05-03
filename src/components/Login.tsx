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
  clearErrors: (email: string, password: string) => any;
  loading: boolean;
  emailError: string;
  passwordError: string;
  authError: string;
}

interface State {
  email: string;
  password: string;
}

export default class LoginComponent extends Component<Props, State> {
  private animationCheckedDone: Animation;
  private fadeOut = new Animated.Value(1);
  private fadeIn = new Animated.Value(0);
  private fadeInAnim: Animated.CompositeAnimation;
  private fadeOutAnim: Animated.CompositeAnimation;

  constructor(props) {
    super(props);
    this.state = {
      email: "", password: ""
    };
  }

  componentDidUpdate() {
    if (this.animationCheckedDone) {
      this.animationCheckedDone.play();
    }
  }

  componentDidMount() {
    if (this.animationCheckedDone) {
      this.animationCheckedDone.play();
    }
  }

  componentWillReceiveProps(nextProps) {
    const newProps = nextProps as Props;
    if (newProps.loading !== this.props.loading) {
      if (newProps.authError) {
        this.showError(newProps.authError);
      }

      Animated.timing(this.fadeOut, {
        toValue: newProps.loading ? 0.3 : 1,
        duration: newProps.loading ? 100 : 300,
      }).start();

      Animated.timing(this.fadeIn, {
        toValue: newProps.loading ? 1.0 : 0,
        duration: newProps.loading ? 300 : 300
      }).start();
    }
  }

  showError(error) {
    Toast.show({
      text: error,
      buttonText: "Okay",
      duration: 3000,
      position: "bottom",
      type: "danger"
    });
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
                    value={this.state.email}
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={email => {
                      this.setState({ email });
                      this.props.clearErrors(email, this.state.password);
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
                      this.props.clearErrors(this.state.email, password);
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

              <Animated.View style={{
                opacity: this.fadeIn,
                width: 327,
                margin: 0, padding: 0,
                height: 48, alignItems: "center", justifyContent: "center"
              }}>
                <Animation
                  ref={(animation: Animation) => {
                    this.animationCheckedDone = animation;
                  }}
                  loop={true}
                  source={require("../../assets/anim/animation-w800-h600.json")}
                />
              </Animated.View>

              <Animated.View style={{ opacity: this.fadeOut }}>
                <LLButton
                  onPress={() => this.props.login(this.state.email, this.state.password)}
                  text="Login"
                  style={styles.button}
                  disabled={this.props.loading}
                />
              </Animated.View>
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
    margin: 16
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
