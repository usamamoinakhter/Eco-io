import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ReferralCard extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#C9F8C8', padding: 8, marginTop: 20 }}>
                <Image source={{ uri: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2187,w_3883,x_0,y_395/f_auto,q_auto,w_1100/v1562077101/shape/mentalfloss/30738-gettyimages-845816364.jpg" }}
                    resizeMode="cover"
                    style={{ height: 130, width: 130, }}
                />
                <View style={{ flex: 1 }}>
                    <Text style={{ paddingLeft: 10, textAlign: 'justify', flex: 1, color: '#4DB854', fontWeight: '300', fontSize: 20 }} >
                        {this.props.offer}
                    </Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={{ textAlign: 'center' }}>Redeem Offer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
