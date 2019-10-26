import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'
import { ScrollView } from 'react-native-gesture-handler'
import NotificationCard from '../Components/NotificationCard'

export default class Profile extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <Image source={require('./../assets/bg.png')} style={{ width: '100%', height: 250 }} />
                <Image source={require('./../assets/profile2.png')} style={{ width: '100%', height: 200, position: 'absolute', top: 150 }} resizeMode="cover" />
                <View style={{ width: '100%', height: 100, padding: 30, paddingTop: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('./../assets/bg.png')} style={{ height: 70, width: 70, borderRadius: 35 }}
                                imageStyle={{ borderRadius: 35 }}
                                resizeMode="cover"
                            />
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={{ color: '#3D8E56', fontWeight: 'bold', fontSize: 15 }}>Usama Moin</Text>
                                <Text style={{ color: '#3D8E56' }}>Referral Code</Text>

                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#3D8E56' }}>Points: 53</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ width: '100%', backgroundColor: 'white', marginTop: 20 }}
                    contentContainerStyle={{ paddingHorizontal: 20, }}
                >
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <View style={{ padding: 200 }}>

                    </View>

                </ScrollView>
            </View>
        )
    }
}
