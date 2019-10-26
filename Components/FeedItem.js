import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class FeedItem extends Component {
    render() {
        return (
            <View style={{ paddingTop: 35, flexDirection: 'row' }}>
                <Image source={{ uri: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2187,w_3883,x_0,y_395/f_auto,q_auto,w_1100/v1562077101/shape/mentalfloss/30738-gettyimages-845816364.jpg" }}
                    resizeMode="cover"
                    style={{ height: 130, width: 130, }}
                />
                <Text style={{ paddingLeft: 10, textAlign: 'justify', flex: 1, color: '#4DB854', fontWeight: '300' }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non aliquam velit, id bibendum ante. Pellentesque auctor ullamcorper porttitor.
                </Text>
            </View>
        )
    }
}
