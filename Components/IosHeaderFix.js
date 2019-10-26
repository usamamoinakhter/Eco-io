import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

class IosHeaderFix extends Component {
    render() {
        return (
            <View style={[styles.statusBarBackground, this.props.style || {}]}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 35 : 0,
        backgroundColor: "rgba(255,255,255,0.00)",
    }

})

module.exports = IosHeaderFix;