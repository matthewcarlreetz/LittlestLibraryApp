import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
  NavigationActions
} from "react-navigation";
import { BackHandler } from "react-native";
import LoginScreen from "../containers/Login";
import LibraryList from "../containers/LibraryList";
import AddLibrary from "../containers/AddLibrary";
import LibraryDetail from "../containers/LibraryDetail";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import { NavigationScreenProps } from "react-navigation";
import { AppState } from "../redux/types";
import { addListener } from "../index";
import platform from "../../native-base-theme/variables/platform";

interface INavigationScreenProps extends NavigationScreenProps<{}> { }

interface INavigatorHostProps {
  nav: any;
  dispatch: any;
}

const Tabs = TabNavigator({
  LibraryList: {
    screen: LibraryList
  },
  LibraryMap: {
    screen: LibraryList
  }
});

export const HomeStack = StackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Detail: {
      screen: LibraryDetail
    },
    Add: {
      screen: AddLibrary
    }
  },
  {
    navigationOptions: {
      headerStyle: { backgroundColor: platform.brandDark },
      headerTitleStyle: {
        color: "#ffffff"
      },
      headerTintColor: "#ffffff",
    }
  });

export const MainStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Main: {
      screen: HomeStack
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    backBehavior: "none"
  },
);

class RootNavigatorHost extends React.PureComponent<INavigatorHostProps> {
  constructor(props: INavigatorHostProps) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
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
  nav: state.nav
});

export default connect(mapStateToAppNavProps)(RootNavigatorHost);
