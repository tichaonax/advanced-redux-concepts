import { createReducer } from '../createReducer';
import {SET_TIME} from "../actions/worldtime";

const initState = {};

export const timeReducer = createReducer(initState,
  {
    [SET_TIME](state, {payload}) {
      return Object.assign({}, state, payload);
    },
  },
);

export default timeReducer;