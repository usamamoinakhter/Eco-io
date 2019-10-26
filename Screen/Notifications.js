import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'

export default class Notifications extends Component {
    render() {
        return (
            <View>
                <IosHeaderFix />
                <Text> Notifications </Text>
            </View>
        )
    }
}
