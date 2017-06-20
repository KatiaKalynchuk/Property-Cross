import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import List from './app/components/List';
import MainSection from './app/components/MainSection';

import './index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={MainSection}/>
          <Route path="/list" component={List}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
