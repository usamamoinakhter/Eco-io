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
            if (routeName === 'Feed') {

                Icon = require('./assets/feed.png');
            } else if (routeName === 'Notifications') {
                Icon = require('./assets/alert.png');

            } else if (routeName === 'Capture') {
                Icon = require('./assets/camera-24px.png');
                return (
                    <View style={{
                        backgroundColor: 'white', height: 70, width: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center', elevation: 2,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <Image source={Icon} style={{ height: 66, width: 66, tintColor: '#053D10' }} resizeMode="contain" />
                    </View>)

            } else if (routeName === 'Profile') {
                Icon = require('./assets/profile.png');

            }
            else if (routeName === 'Share') {
                Icon = require('./assets/feed.png');
            }

            return <Image source={Icon} style={{ height: 18, width: 18, tintColor: tintColor }} resizeMode="contain" />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        // activeBackgroundColor: "red",
        showLabel: false,
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#4DB854',
            borderTopWidth: 0,
            // height: 30,
        },

    }
});

export default createAppContainer(TabNavigator);