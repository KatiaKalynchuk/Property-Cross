import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import List from './app/components/List';
import Details from './app/components/PropertyDetails';
import MainSection from './app/components/MainSection';
import Faves from './app/components/Faves';

import './index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={MainSection}/>
          <Route path="/list" component={List}/>
          <Route path="/details(/:id)" component={Details}/>
          <Route path="/faves" component={Faves}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);