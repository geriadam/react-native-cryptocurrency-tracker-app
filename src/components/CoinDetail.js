import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';

class CoinDetail extends Component {
    LoadingIndicatorView() {
        return (
            <ActivityIndicator
                color="#009b88"
                size="large"
                style={styles.ActivityIndicatorStyle}
            />
        )
    }
 	render() {
        const { params } = this.props.navigation.state
        return (
            <WebView
                source={{ uri: `https://coinmarketcap.com/currencies/${params.coin.name}/` }}
                renderLoading={this.LoadingIndicatorView}
                startInLoadingState={true}
            />
        )
	}
}

const styles = StyleSheet.create({
    ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default CoinDetail
