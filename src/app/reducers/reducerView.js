import {PRELOADER, ERROR} from '../constants/ActionTypes';

const initialState = {
    preloader: false,
    error: null
}

export default function reducerView(state = initialState, action) {
    switch (action.type) {
    case PRELOADER:
        return Object.assign({}, state, {
            preloader: action.payload
        });

    case ERROR:
        return Object.assign({}, state, {
            error: action.payload
        });
    default:
        return state;
    }
}