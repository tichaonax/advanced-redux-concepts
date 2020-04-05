//createAction(type, payloadCreator, metaCreator)
import { createAction } from 'redux-actions';

// feature name
export const JOKE = '[Joke]';

// action types
export const FETCH_JOKE = `${JOKE} FETCH`;
export const SET_JOKE   = `${JOKE} SET`;

// action creators
export const fetchJoke = ({query}) => (
    createAction(
        FETCH_JOKE, 
        () => query,
        () => ({})
    )
)({query});

export const setJoke= ({joke, normalizeKey}) => (
  createAction(
      SET_JOKE,
       () => joke, 
       () => ({normalizeKey, feature: JOKE})
    )
)({joke, normalizeKey});