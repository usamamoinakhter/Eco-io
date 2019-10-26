import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'

export default class Profile extends Component {
    render() {
        return (
            <View>
                <IosHeaderFix />
                <Text> Profile </Text>
            </View>
        )
    }
}
