import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FeedItem from '../Components/FeedItem'

export default class NewsFeed extends Component {
    render() {
        return (
            <View style={{ width: '100%', flex: 1 }}>
                <IosHeaderFix />
                <View style={styles.header}>
                    <Image source={require('./../assets/2Ecoio.png')} style={{ height: 30, width: 30 }} resizeMode="contain" />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('./../assets/search.png')} style={{ height: 20, width: 20, marginRight: 5 }} resizeMode="contain" />
                        <Image source={require('./../assets/login.png')} style={{ height: 20, width: 20 }} resizeMode="contain" />
                    </View>
                </View>
                <ScrollView style={{ width: '100%', height: '100%', }} showsVerticalScrollIndicator={false}>
                    <ImageBackground source={{ uri: 'https://scx1.b-cdn.net/csz/news/800/2017/plasticsnots.jpg' }} resizeMode="cover" style={styles.carousel}>
                        <View style={{
                            padding: 25, justifyContent: 'space-between',
                            height: '100%'
                        }}>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                <Text style={{ textTransform: 'uppercase', color: 'white', fontWeight: 'bold', textShadowColor: 'black', textShadowRadius: 5 }}>RECENT</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('./../assets/clock.png')}
                                        style={{ tintColor: 'white', height: 15, width: 15, marginRight: 4 }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{ color: 'white', fontWeight: '500', textShadowColor: 'black', textShadowRadius: 5 }}>1h ago</Text>
                                </View>
                            </View>
                            <Text style={{ color: 'white', fontWeight: 'bold', textShadowColor: 'black', textShadowRadius: 5, fontSize: 15 }}>
                                Short Description to be displayed here
                                Short Description to be displayed here
                        </Text>
                        </View>


                    </ImageBackground>

                    <TouchableOpacity style={{ width: '100%', padding: 10 }} onPress={() => {
                        this.props.navigation.navigate('Leaderboard')
                    }}>
                        <Text style={{ width: '100%', textAlign: 'center' }}>Open Leaderboard</Text>
                    </TouchableOpacity>
                    <View style={styles.feed}>
                        <View style={{ justifyContent: 'space-between', width: '100%', flexDirection: 'row' }}>
                            <Text style={{ textTransform: 'uppercase', color: '#4DB854', fontWeight: 'bold', fontSize: 12 }}> NEARBY </Text>
                            <ScrollView style={{ marginLeft: 15 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity activeOpacity={0.8} style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: '#707070', fontSize: 12 }}>Reported</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={{ paddingLeft: 15 }}>
                                    <Text style={{ color: '#707070', fontSize: 12 }}>Reported Verification</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={{ paddingLeft: 15 }}>
                                    <Text style={{ color: '#707070', fontSize: 12 }}>Solved</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={{ paddingLeft: 15 }}>
                                    <Text style={{ color: '#707070', fontSize: 12 }}>Solved Verification</Text>
                                </TouchableOpacity>
                            </ScrollView>

                        </View>
                        <FeedItem />
                        <FeedItem />

                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />

                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    carousel: {
        height: 280,
        width: '100%',
        backgroundColor: 'green',
        // padding: 25,
        justifyContent: 'space-between'
    },
    feed: {
        padding: 25,

    }
})