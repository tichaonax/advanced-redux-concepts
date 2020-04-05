//createAction(type, payloadCreator, metaCreator)
import { createAction } from 'redux-actions';

// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR   = 'API_ERROR';

// api action creators
export const apiRequest = ({ body, method, url, feature}) => (
  createAction(`${feature} ${API_REQUEST}`, 
    () => body,
    () => ({method, url, feature}),
  ))({ body, method, url, feature});


export const apiSuccess = ({response, feature}) => (
  createAction(`${feature} ${API_SUCCESS}`,
    () => response,
    () => ({feature})
  ))({response, feature});

export const apiError = ({error, feature}) => (
  createAction(`${feature} ${API_ERROR}`,
    () => error,
    () => ({feature})
  ))({error, feature});