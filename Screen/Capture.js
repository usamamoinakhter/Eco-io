import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'

export default class Capture extends Component {
    render() {
        return (
            <View style={{ width: '100%', flex: 1 }}>
                <IosHeaderFix />
                <Text> Capture </Text>
            </View>
        )
    }
}
