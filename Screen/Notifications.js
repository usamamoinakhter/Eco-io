import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'
import { ScrollView } from 'react-native-gesture-handler'
import NotificationCard from '../Components/NotificationCard'

export default class Notifications extends Component {
    render() {
        return (
            <View>
                <IosHeaderFix style={{ backgroundColor: '#C9F8C8' }} />
                <View style={styles.header}>
                    <Text style={{ color: '#3D8E56', fontWeight: 'bold' }}> Notifications </Text>
                </View>
                <ScrollView style={{ width: '100%', paddingHorizontal: 25 }}>
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />

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