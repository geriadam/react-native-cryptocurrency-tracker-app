import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import Store from '../Store.js';
import { Header, CryptoContainer } from '../components';

class Home extends Component{
    render(){
        return (
            <Provider store={Store}>
                <View>
                    <Header/>
                    <CryptoContainer/>
                </View>
            </Provider>
        )
    }
}

export default Home;
