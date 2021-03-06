import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AndroidSplash from './Screen/AndroidSplash';
import { Platform } from 'react-native'
import TabNavigation from './TabNavigation';
import SignupScreen from './Screen/SignupScreen';
import SigninScreen from './Screen/SigninScreen';
import LeaderBoard from './Screen/LeaderBoard';


const AppNavigator = createStackNavigator({
  Splash: {
    screen: AndroidSplash,
  },
  TabNav: {
    screen: TabNavigation,
  },
  Signup: {
    screen: SignupScreen,
  },
  Signin: {
    screen: SigninScreen,
  },
  Leaderboard: {
    screen: LeaderBoard,
  },
},
  {
    initialRouteName: 'TabNav',
    headerMode: "none",
    defaultNavigationOptions: {
      gesturesEnabled: true,
    },
  }
);

export default createAppContainer(AppNavigator);