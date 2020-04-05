//createAction(type, payloadCreator, metaCreator)
import { createAction } from 'redux-actions';

// feature name
export const BEER = '[Beer]';

// action types
export const FETCH_BEER = `${BEER} FETCH`;
export const SET_BEER   = `${BEER} SET`;

// action creators
export const fetchBeer = ({query}) => (
  createAction(
    FETCH_BEER,
    () => query,
  )
)({query})

export const setBeer = ({beer, normalizeKey}) => (
  createAction(
    SET_BEER,
    () => beer,
    () => ({normalizeKey, feature: BEER }),
  )
)({beer, normalizeKey});
