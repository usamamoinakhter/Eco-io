import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LeaderBoard extends Component {
    render() {
        return (
            <View>
                <IosHeaderFix style={{ backgroundColor: '#C9F8C8' }} />
                <View style={styles.header}>
                    <Text style={{ color: '#3D8E56', fontWeight: 'bold' }}> Leader Board </Text>
                </View>
                <Image source={require('./../assets/referralheader.png')} style={{ width: '100%', height: 250 }} resizeMode="cover" />
                <ScrollView style={{ width: '100%', paddingHorizontal: 25 }}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>Rank</Text>
                        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>Name</Text>
                        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>Points</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, textAlign: 'center' }}>1</Text>
                        <Text style={{ flex: 1, textAlign: 'center' }}>Usama Moin</Text>
                        <Text style={{ flex: 1, textAlign: 'center' }}>25</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, textAlign: 'center' }}>2</Text>
                        <Text style={{ flex: 1, textAlign: 'center' }}>Usama Ahmed</Text>
                        <Text style={{ flex: 1, textAlign: 'center' }}>22</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, textAlign: 'center' }}>3</Text>
                        <Text style={{ flex: 1, textAlign: 'center' }}>Shahrukh Khan</Text>
                        <Text style={{ flex: 1, textAlign: 'center' }}>19</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, textAlign: 'center' }}>4</Text>
                        <Text style={{ flex: 1, textAlign: 'center' }}>Multazam Siddiqui</Text>
                        <Text style={{ flex: 1, textAlign: 'center' }}>10</Text>
                    </View>


                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack()
                    }}>
                        <Text style={{ padding: 10, textAlign: 'center' }}>Go Back</Text>
                    </TouchableOpacity>
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
