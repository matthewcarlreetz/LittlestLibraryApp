import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "native-base";
import * as ReactNative from "react-native";

interface Props {
  text: string;
  onPress?: () => void;
  style?: ReactNative.ViewStyle;
  disabled?: boolean;
}

export default class LLButton extends Component<Props, {}> {
  render() {
    return (
      <Button
        onPress={this.props.onPress}
        style={[styles.button, this.props.style]}
        disabled={this.props.disabled}
        dark
        block
      >
        <Text style={styles.textContent}>{this.props.text}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    borderRadius: 2,
    height: 64,
    alignItems: "center"
  },
  textContent: {
    fontSize: 20,
    color: "white"
  }
});
