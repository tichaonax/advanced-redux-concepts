//createAction(type, payloadCreator, metaCreator)
import { createAction } from 'redux-actions';

// feature name
export const TIME = '[Time]';

// action types
export const FETCH_TIME = `${TIME} FETCH`;
export const SET_TIME   = `${TIME} SET`;

// action creators
export const fetchTime = createAction(
    FETCH_TIME,
    query => query,
  );

export const setTime = ({time, normalizeKey}) => (
  createAction(
    SET_TIME,
    () => time,
    () => ({normalizeKey, feature: TIME })
  )
)({time, normalizeKey});
