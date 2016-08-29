import 'core-js/fn/object/assign';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import App from './components/Main';
import Crm from './components/Crm';
import Home from './components/Home';

import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import { createStore } from 'redux';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="crm" component={Crm} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

// Render the main component into the dom
ReactDOM.render(<Root />, document.getElementById('app'));
