import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, Dimensions, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default class SigninScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: Dimensions.get('screen').height
        }


    }


    render() {
        return (
            <View>
                <ImageBackground source={require('./../assets/header.png')}
                    style={{ width: '100%', height: 300, alignItems: 'center' }}
                    resizeMode="cover"
                >
                    <Image source={require('./../assets/EcoioLogo.png')} style={{ width: '100%', height: 190, marginTop: 30 }} resizeMode="contain" />
                </ImageBackground>

                <ScrollView style={{ width: '100%', height: '100%', }}
                    contentContainerStyle={{ paddingHorizontal: 25 }}
                >
                    <View style={{ width: '100%', borderBottomColor: 'rgba(0,0,0,0.5)', borderBottomWidth: 1, paddingTop: 35 }}>
                        <TextInput style={{ paddingTop: 23, fontSize: 17, paddingHorizontal: 8, color: '#3B8686' }} placeholder="Email" />
                    </View>

                    <View style={{ width: '100%', borderBottomColor: 'rgba(0,0,0,0.5)', borderBottomWidth: 1, paddingTop: 35 }}>
                        <TextInput style={{ paddingTop: 23, fontSize: 17, paddingHorizontal: 8, color: '#3B8686' }} placeholder="Password" secureTextEntry={true} />
                    </View>

                    <TouchableOpacity style={{ width: '100%', marginTop: 50, backgroundColor: '#79BD9A', justifyContent: 'center', alignItems: 'center', padding: 15 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>SIGNIN</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', paddingTop: 30 }}>
                        <TouchableOpacity>
                            <Image source={require('./../assets/facebook.png')} style={{ width: 25, height: 25, }} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../assets/twitter.png')} style={{ width: 25, height: 25, paddingHorizontal: 50 }} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../assets/g+.png')} style={{ width: 25, height: 25, }} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>


                <Image source={require('./../assets/footer.png')}
                    style={{ position: 'absolute', top: this.state.height - 270, width: '100%', height: 270 }}
                    resizeMode="cover"
                />
            </View >
        )
    }
}
