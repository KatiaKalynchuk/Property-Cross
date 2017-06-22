import {combineReducers} from 'redux';

import reducerData from './reducerData';
import reducerView from './reducerView';

const rootReducer = combineReducers({
    reducerData,
    reducerView
});

export default rootReducer;
