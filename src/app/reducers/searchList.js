import {SEARCH} from '../constants/ActionTypes';

const initialState = [];

export default function searchList(state = initialState, action) {
    switch (action.type) {
    case SEARCH:
        console.log(action.peyload);
        console.log(state);
        return [
            ...action.peyload
        ];
      
    default:
        return state;
    }
}
