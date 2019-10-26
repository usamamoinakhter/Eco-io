import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'
import { ScrollView } from 'react-native-gesture-handler'
import NotificationCard from '../Components/NotificationCard'
import ReferralCard from '../Components/ReferralCard'

export default class Notifications extends Component {
    render() {
        return (
            <View>
                <IosHeaderFix style={{ backgroundColor: '#C9F8C8' }} />
                <View style={styles.header}>
                    <Text style={{ color: '#3D8E56', fontWeight: 'bold' }}> Referral </Text>
                </View>
                <Image source={require('./../assets/referralheader.png')} style={{ width: '100%', height: 250 }} resizeMode="cover" />
                <ScrollView style={{ width: '100%', paddingHorizontal: 25 }}>
                    <ReferralCard offer="Buy 1 Broast get 1 free" />
                    <ReferralCard offer="Buy 2 Slush get 1 free" />
                    <ReferralCard offer="Get 40% off on entire menu" />
                    <View style={{ padding: 15 }}>

                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: "#C9F8C8",
        justifyContent: 'center',
        alignItems: 'center',

    }
})