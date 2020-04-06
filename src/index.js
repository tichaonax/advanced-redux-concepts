import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import {store} from "./redux/store";

import {fetchJoke} from './redux/actions/joke';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchJoke('programming'));