import {SEARCH, ERROR, ADD_TO_FAVES, REMOVE_FROM_FAVES, LOCATION, RECENT_SEARCHES} from '../constants/ActionTypes';

const initialState = {
    searchData: [],
    favesData: [],
    locationData: [],
    recentSearches: []
};

export default function reducerData(state = initialState, action) {
    switch (action.type) {
    case SEARCH:
        return Object.assign({}, state, {
            searchData: action.payload
        });

    case ADD_TO_FAVES:
        return Object.assign({}, state, {
            favesData: [...state.favesData, action.payload]
        });

    case REMOVE_FROM_FAVES:
        return Object.assign({}, state, {
            favesData: state.favesData.filter(faves =>{
                return Number(faves.latitude) !== Number(action.payload.latitude)
            })
        });

    case LOCATION:
        return Object.assign({}, state, {
            locationData: [...action.payload]
        });

    case RECENT_SEARCHES: 
        return Object.assign({}, state, {
            recentSearches: [...state.recentSearches, action.payload] 
        });   

    default: 
        return state;
    }
}
