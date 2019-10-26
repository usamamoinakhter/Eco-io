import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class NotificationCard extends Component {
    render() {
        return (
            <View style={{ width: '100%', marginTop: 20, backgroundColor: '#C9F8C8', flexDirection: 'row', padding: 8 }}>
                <Image source={{ uri: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2187,w_3883,x_0,y_395/f_auto,q_auto,w_1100/v1562077101/shape/mentalfloss/30738-gettyimages-845816364.jpg" }}
                    resizeMode="cover"
                    style={{ height: 100, width: 110, }} />
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <Text style={{ flex: 1, paddingLeft: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                    <Text style={{ width: '100%', textAlign: 'right', paddingTop: 7 }}>26th Oct 2019 </Text>

                </View>
            </View>
        )
    }
}
