import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // the Provider component gives other components access to the redux central data store

import store from './store/index'; // importing central data store to be passed to Provider component

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
