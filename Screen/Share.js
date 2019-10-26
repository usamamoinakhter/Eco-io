import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import IosHeaderFix from './../Components/IosHeaderFix'
import NotificationCard from '../Components/NotificationCard'
import ShareCard from '../Components/ShareCard'

export default class Share extends Component {
    render() {
        return (
            <View>
                <IosHeaderFix style={{ backgroundColor: '#C9F8C8' }} />
                <View style={styles.header}>
                    <Text style={{ color: '#3D8E56', fontWeight: 'bold' }}> Share </Text>
                </View>
                <ScrollView style={{ width: '100%', backgroundColor: 'white', marginTop: 20 }}
                    contentContainerStyle={{ paddingHorizontal: 20, }}
                >
                    <ShareCard />
                    <ShareCard />

                    <ShareCard />
                    <ShareCard />
                    <ShareCard />
                    <View style={{ padding: 200 }}>

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