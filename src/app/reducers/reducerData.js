import {SEARCH, ERROR, ADD_TO_FAVES} from '../constants/ActionTypes';

const initialState = {
    searchData: [],
    favesData: []
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
      
    default: 
        return state;
    }
}
