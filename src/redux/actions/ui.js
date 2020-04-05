//createAction(type, payloadCreator, metaCreator)
import { createAction } from 'redux-actions';

// action types
export const SET_LOADER = 'SET_LOADER';

// action creators
export const setLoader = ({state, feature}) => (
    createAction(
        `${feature} ${SET_LOADER}`,
        state => state,
        () => ({feature})
    )
)({state, feature});