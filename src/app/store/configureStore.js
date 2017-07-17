import {createStore, applyMiddleware} from 'redux';

import rootReducer from '../reducers/index';
import {requestApi, requestLocation} from '../middleware/index';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(requestApi, requestLocation)
    );
    /*eslint-disable */
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = rootReducer;
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
