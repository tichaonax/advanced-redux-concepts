import produce from 'immer'
import { createReducer } from '../createReducer';
import {SET_BEER} from "../actions/beer";

const initState = {};

export const beerReducer = createReducer(initState,
  {
    [SET_BEER](state, {payload}) {
      return produce(state, draft => {
        draft.favorite = payload;
      });

    },
  },
);

export default beerReducer;