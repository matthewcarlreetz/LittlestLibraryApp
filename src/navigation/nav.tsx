import { addNavigationHelpers, StackNavigator, TabNavigator } from "react-navigation";
import LoginScreen from "../containers/Login";
import CounterScreen from "../containers/Counter";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import { NavigationScreenProps } from "react-navigation";
import { AppState } from "../redux";
import { addListener } from "../index";

interface INavigationScreenProps extends NavigationScreenProps<{}> { }

interface INavigatorHostProps {
    nav: any;
    dispatch: any;
}

const Tabs = TabNavigator({
    LibraryList: {
        screen: CounterScreen,
    },
    LibraryMap: {
        screen: CounterScreen,
    },
});

export const MainStack = StackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        Main: {
            screen: Tabs,
        },
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

class RootNavigatorHost extends React.PureComponent<INavigatorHostProps> {
    constructor(props: INavigatorHostProps) {
        super(props);
    }

    public render() {
        const navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener
        });
        return <MainStack navigation={navigation} />;
    }
}
const mapStateToAppNavProps = (state: AppState) => ({
    nav: state.nav,
});

export default connect(mapStateToAppNavProps)(RootNavigatorHost);
