import {PRELOADER, ERROR} from '../constants/ActionTypes';

const initialState = {
    preloader: true,
    error: ''
}

export default function reducerView(state = initialState, action) {
    switch (action.type) {
    case PRELOADER:
        return {
            preloader: action.payload
        }
    case ERROR:
        console.log(action.payload);
        return Object.assign({}, state, {
            error: action.payload
        });
    default:
        return state;
    }
}