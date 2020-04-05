//import {DevTools} from '../ui/DevTool'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { createLogger } from 'redux-logger';

import {beerReducer} from './reducers/beerReducer';
import {beerMiddleware} from './middleware/feature/beer';
import {apiMiddleware} from './middleware/core/api';
import {uiReducer} from "./reducers/uiReducer";
import {notificationsReducer} from "./reducers/notificationReducer";
import {normalizeMiddleware} from "./middleware/core/normalize";
import {notificationMiddleware} from "./middleware/core/notification";
import {loggerMiddleware} from "./middleware/core/logger";
import {actionSplitterMiddleware} from "./middleware/core/actionSplitter";

const rootReducer = combineReducers({
  beer: beerReducer,
  ui: uiReducer,
  notification: notificationsReducer
});

// create the feature middleware array
const featureMiddleware = [
  beerMiddleware
];

// create the core middleware array
const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  normalizeMiddleware,
  notificationMiddleware,
  loggerMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const logger = createLogger();

const enhancer = composeEnhancers(applyMiddleware(...featureMiddleware, ...coreMiddleware, logger));

// create and configure the store
export const store = createStore(rootReducer, {}, enhancer);
