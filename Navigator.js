import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AndroidSplash from './Screen/AndroidSplash';
import Dashboard from './Screen/Dashboard';
import { Platform } from 'react-native'
import TabNavigation from './TabNavigation';


const AppNavigator = createStackNavigator({
    Splash:{
screen:AndroidSplash,
    },
    TabNav: {
      screen: TabNavigation,
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