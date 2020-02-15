import axios from 'axios';
import {apiBaseURL} from './../Utils/Constants';
import {FETCHIN_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL} from './../Utils/ActionTypes';

export default function FetchCoinData(){
	return dispatch => {
		dispatch({type: FETCHIN_COIN_DATA});

		return axios.get(`${apiBaseURL}/v1/ticker/?llimit=10`)
					.then((response) => {
						console.log(response);
						return dispatch({type: FETCHING_COIN_DATA_SUCCESS, payload: response.data})
					})
					.catch(err => {
						return dispatch({type: FETCHING_COIN_DATA_FAIL, payload: err})
					})
	}
}