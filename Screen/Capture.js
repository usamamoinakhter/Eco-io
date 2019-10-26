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


        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    imageSource: source,
                });
            }
        });

    }

    render() {
        return (
            <View style={{ width: '100%', flex: 1 }}>
                <IosHeaderFix />
                <Text> Capture </Text>
            </View>
        )
    }
}
