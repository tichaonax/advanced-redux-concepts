import { createReducer } from '../createReducer';
import {SET_BEER} from "../actions/beer";

const initState = [];

export const beerReducer = createReducer(initState,
  {
    [SET_BEER](state, {payload}) {
      return Object.assign({}, state, payload);
    },
  },
);

export default beerReducer;