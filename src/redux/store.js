//import {DevTools} from '../ui/DevTool'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { createLogger } from 'redux-logger';

import {dispatcherMiddleware} from './middleware/routing/dispatcher';
import {beerMiddleware} from './middleware/feature/beer';
import {jokeMiddleware} from './middleware/feature/joke';
import {timeMiddleware} from './middleware/feature/worldtime';

import {actionSplitterMiddleware} from "./middleware/core/actionSplitter";
import {apiMiddleware} from './middleware/core/api';
import {normalizeMiddleware} from "./middleware/core/normalize";
import {notificationMiddleware} from "./middleware/core/notification";
import {loggerMiddleware} from "./middleware/core/logger";

import {beerReducer} from './reducers/beerReducer';
import {jokeReducer} from './reducers/jokeReducer';
import {timeReducer} from './reducers/timeReducer';
import {uiReducer} from "./reducers/uiReducer";
import {notificationsReducer} from "./reducers/notificationReducer";

const rootReducer = combineReducers({
  beer: beerReducer,
  joke: jokeReducer,
  time: timeReducer,
  ui: uiReducer,
  notification: notificationsReducer
});

// create the feature middleware array
const routingMiddleware = [
    dispatcherMiddleware,
];

// create the feature middleware array
const featureMiddleware = [
    dispatcherMiddleware,
    beerMiddleware,
    jokeMiddleware,
    timeMiddleware,
];

// create the core middleware array in the order 
// the actions are forwarded from one to the other
const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  normalizeMiddleware,
  notificationMiddleware,
  //loggerMiddleware,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const logger = createLogger();

const enhancer = composeEnhancers(
    applyMiddleware(
        ...routingMiddleware,
        ...featureMiddleware,
        ...coreMiddleware,
        //logger,
        ));

// create and configure the store
export const store = createStore(rootReducer, {}, enhancer);
