import {FETCHIN_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL} from './../Utils/ActionTypes';

const initialState = {
	isFetching: null,
	data: [],
	hasError: false,
	errorMessage: null
}

export default function(state = initialState, { payload, type }){
	console.log(type);
	switch(type){
		case FETCHIN_COIN_DATA:
			return Object.assign({}, state, {
				isFetching: true,
				data: null,
				hasError: false,
				errorMessage: null
			});

		case FETCHING_COIN_DATA_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				data: payload,
				hasError: false,
				errorMessage: null
			});

		case FETCHING_COIN_DATA_FAIL:
			return Object.assign({}, state, {
				isFetching: false,
				data: payload,
				hasError: true,
				errorMessage: payload
			});

		default:
			return state;
	}
}