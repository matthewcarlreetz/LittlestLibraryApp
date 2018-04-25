import * as ReactNative from "react-native";
import React, { Component } from "react";

interface Props {
    visible: boolean;
    style?: ReactNative.ViewStyle;
}

interface State {
    visible: boolean;
}

export default class Fade extends Component<Props, State> {
    private visibility: any;
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        };
    }

    componentWillMount() {
        this.visibility = new ReactNative.Animated.Value(this.props.visible ? 1 : 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({ visible: true });
        }
        ReactNative.Animated.timing(this.visibility, {
            toValue: nextProps.visible ? 1 : 0,
            duration: 300,
        }).start(() => {
            this.setState({ visible: nextProps.visible });
        });
    }

    render() {
        const { visible, style, children, ...rest } = this.props;

        const containerStyle = {
            opacity: this.visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
            transform: [
                {
                    scale: this.visibility.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1.1, 1],
                    }),
                },
            ],
        };

        const combinedStyle = [containerStyle, style];
        return (
            <ReactNative.Animated.View style={this.state.visible ? combinedStyle : containerStyle} {...rest}>
                {this.state.visible ? children : null}
            </ReactNative.Animated.View>
        );
    }
}