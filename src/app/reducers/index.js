import {combineReducers} from 'redux';
import searchList from './searchList';
import reduserView from './reduserView';

const rootReducer = combineReducers({
    searchList,
    reduserView
});

export default rootReducer;
