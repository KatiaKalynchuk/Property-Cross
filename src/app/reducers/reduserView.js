import {PRELOADER} from '../constants/ActionTypes';

const initialState = {
    preloader: true
}

export default function reduserView(state = initialState, action) {
    switch (action.type) {
    case PRELOADER:
        console.log(action.peyload)
        return {
            preloader: action.peyload
        }
    default:
        return state;
    }
}