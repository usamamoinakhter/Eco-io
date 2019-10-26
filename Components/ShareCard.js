import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ShareCard extends Component {
    render() {
        return (
            <View style={{ width: '100%', marginTop: 20, backgroundColor: '#C9F8C8', flexDirection: 'row', padding: 8 }}>
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <Text style={{ flex: 1, paddingLeft: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#3D8E56', fontWeight: 'bold', textAlign: 'right' }}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
