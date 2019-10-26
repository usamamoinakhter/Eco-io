import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'

export default class Share extends Component {
    render() {
        return (
            <View>
                <IosHeaderFix />
                <Text> Share </Text>
            </View>
        )
    }
}
