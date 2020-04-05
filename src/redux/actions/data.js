//createAction(type, payloadCreator, metaCreator)
import { createAction } from 'redux-actions';

const DATA_NORMALIZED = 'DATA_NORMALIZED';

export const dataNormalized = ({feature}) => (
  createAction(
    `${feature} ${DATA_NORMALIZED}`, 
    () => undefined,
    () => ({feature})
  )
)({feature});