import { createReducer } from '../createReducer';
import {SET_JOKE} from "../actions/joke";

const initState = {};

export const jokeReducer = createReducer(initState,
  {
    [SET_JOKE](state, {payload}) {
      return Object.assign({}, state, payload);
    },
  },
);

export default jokeReducer;