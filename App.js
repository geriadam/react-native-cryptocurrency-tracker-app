import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CryptoContainer from './src/components/CryptoContainer';
import CoinDetail from './src/components/CoinDetail';

const HomeStack = createStackNavigator({
    Home: {
        screen: CryptoContainer,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerTintColor: 'blue'
        })
    },
    CoinDetail: {
        screen: CoinDetail,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.coin_name,
            headerTintColor: 'green'
        })
    }
})
const AppContainer = createAppContainer(HomeStack)

export default class App extends Component{
    render(){
        return <AppContainer />
    }
}
