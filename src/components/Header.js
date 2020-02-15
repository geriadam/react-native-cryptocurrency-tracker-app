import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={HeaderContainer}>
            <Text style={header}>
                Crypto App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        display: 'flex',
        marginTop: 20,
        paddingBottom: 10,
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

const {HeaderContainer, header} = styles;

export default Header;