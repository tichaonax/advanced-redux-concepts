import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import {store} from "./redux/store";

import {fetchBeer} from './redux/actions/beer';
import {fetchJoke} from './redux/actions/joke';
import {fetchTime} from './redux/actions/worldtime';

ReactDOM.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <App />
 {/*  </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchBeer(''));
store.dispatch(fetchJoke('programming'));
store.dispatch(fetchTime('ip'));