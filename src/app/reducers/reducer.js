import * as types from '../constants/ActionTypes';

const initialState = {
    searchData: [],
    favesData: [],
    locationData: [],
    recentSearches: [],
    preloader: false,
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

    case types.SEARCH_REQUEST: 
    case types.LOCATION_REQUEST:
        return Object.assign({}, state, {
            searchData: [],
            locationData: [],
            preloader: true
        });

    case types.SEARCH_SUCCESS:
        return Object.assign({}, state, {
            locationData: [],
            searchData: action.payload,
            preloader: false,
            error: ''
        });

    case types.SEARCH_FAILURE:
    case types.LOCATION_FAILURE:
        return Object.assign({}, state, {
            error: action.payload,
            preloader: false
        });

    case types.LOCATION_SUCCESS:
        return Object.assign({}, state, {
            locationData: [...action.payload],
            searchData: [],
            preloader: false,
            error: ''
        });

    case types.ADD_TO_FAVES:
        return Object.assign({}, state, {
            favesData: [...state.favesData, action.payload]
        });

    case types.REMOVE_FROM_FAVES:
        return Object.assign({}, state, {
            favesData: state.favesData.filter(faves =>{
                return Number(faves.latitude) !== Number(action.payload.latitude)
            })
        });

    case types.RECENT_SEARCHES: 
        return Object.assign({}, state, {
            locationData: [],
            recentSearches: [...state.recentSearches, action.payload] 
        });   

    default: 
        return state;
    }
}
