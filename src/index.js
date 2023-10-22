import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import App from './App';

const root = createRoot(document.getElementById('app'));

function ChangeRouter(route) {
  return { type: 'CHANGE_ROUTE', route: route };
}
function reducer(state = { route: 'Home' }, action) {
  switch (action.type) {
    case 'CHANGE_ROUTE':
      return { route: state.route };
    default:
      return state;
  }
}

function mapStateToProps(state) {
  return {
    count: state.route,
  };
}
const mapDispatchToProps = {
  ChangeRouter,
};
const store = createStore(reducer);

const Apps = connect(mapStateToProps, mapDispatchToProps)(App);

root.render(
  <Provider store={store}>
    <Apps />
  </Provider>
);
