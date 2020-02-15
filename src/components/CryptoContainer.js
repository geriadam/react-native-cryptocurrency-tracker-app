import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, Stylesheet, ScrollView, RefreshControl, ActivityIndicator, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Router, Scene } from 'react-native-router-flux';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import CoinDetail from './CoinDetail';

class CryptoContainer extends Component {

    constructor(props){
        super(props);
        this.state = { refreshing: true };
        this.onRefresh = this.onRefresh.bind(this);
    }
    componentDidMount(){
        this.props.FetchCoinData();
        this.setState({ refreshing: false });
    }

    onRefresh() {
        this.props.FetchCoinData();
    }

    renderCoinCards(){
        const { crypto } = this.props;
        return crypto.data.map((coin) =>
            <TouchableOpacity
                key={coin}
                onPress={() => this.props.navigation.navigate('CoinDetail', { coin })}
            >
                <CoinCard
                    key={coin.id}
                    symbol={coin.symbol}
                    coin_name={coin.name}
                    symbol={coin.symbol}
                    price_usd={coin.price_usd}
                    percent_change_24hr={coin.percent_change_24h}
                    percent_change_7d={coin.percent_change_7d}
                />
            </TouchableOpacity>
        )
    }

    render(){
        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (this.state.refreshing) {
          return (
                //loading view while data is loading
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        if(crypto.isFetching){
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer} refreshControl={
                <RefreshControl
                  //refresh control used for the Pull to Refresh
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh.bind(this)}
                />
              }>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55,
    }
}

const mapStateToProps = state => {
    return { crypto: state.crypto }; 
};

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer)
