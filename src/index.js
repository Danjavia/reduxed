import 'core-js/fn/object/assign';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import {List, Map} from 'immutable';
import { Provider } from 'react-redux';
//import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import configureStore from './stores/configureStore';

const store = configureStore();

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
