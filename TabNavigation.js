import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Share from './Screen/Share';
import Profile from './Screen/Profile';
import Capture from './Screen/Capture';
import NewsFeed from './Screen/NewsFeed';
import Notifications from './Screen/Notifications';




const TabNavigator = createBottomTabNavigator({
    Feed: NewsFeed,
    Notifications: Notifications,
    Capture: Capture,
    Profile: Profile,
    Share: Share
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let Icon = require('./assets/Ecoio.png');
                if (routeName === 'Home') {

                    Icon =  require('./assets/Ecoio.png');
                } else if (routeName === 'Notifications') {
                    Icon =  require('./assets/Ecoio.png');

                } else if (routeName === 'Capture') {
                    Icon = require('./assets/Ecoio.png');

                } else if (routeName === 'Profile') {
                    Icon =  require('./assets/Ecoio.png');

                }
                else if (routeName === 'Share') {
                    Icon = require('./assets/Ecoio.png');
                }

                return <Image source={Icon} style={{ height: 22, width: 22, tintColor: tintColor }} resizeMode="contain" />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'rgb(70,159,232)',
            inactiveTintColor: 'rgba(0,0,0,0.15)',
            // activeBackgroundColor: "red",
            showLabel: false,
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: 'rgb(243,243,247)',
                borderTopWidth: 0
            },
        }
    });

export default createAppContainer(TabNavigator);