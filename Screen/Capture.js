import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IosHeaderFix from './../Components/IosHeaderFix'
import ImagePicker from 'react-native-image-picker';

export default class Capture extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageSource: null
        }
        console.warn("Cam initialize")
        const options = {
            title: 'Capture Image ',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };


        // // Open Image Library:
        // ImagePicker.launchImageLibrary(options, (response) => {
        //     // Same code as in above section!
        // });

    }

    render() {
        return (
            <View style={{ width: '100%', flex: 1 }}>
                <IosHeaderFix />
                {/* <Text> Capture </Text> */}
            </View>
        )
    }
}
