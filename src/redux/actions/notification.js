//createAction(type, payloadCreator, metaCreator)
import { createAction } from 'redux-actions';

// action types
export const SET_NOTIFICATION    = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

// action creators
export const setNotification = ({message, feature}) => (
    createAction(`${feature} ${SET_NOTIFICATION}`, message, {feature})
);

export const removeNotification = ({notificationId, feature}) => (
    createAction(`${feature} ${REMOVE_NOTIFICATION}`,notificationId, {feature})
);
