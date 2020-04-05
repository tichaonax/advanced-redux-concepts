import {dataNormalized} from "../../actions/data";
import {SET_BEER, setBeer} from "../../actions/beer";
import {SET_JOKE, setJoke} from '../../actions/joke';
import {SET_TIME, setTime} from '../../actions/worldtime';

export const normalizeMiddleware = ({dispatch}) => (next) => (action) => {

  // filter both by action type and metadata content
  if (action.type && action.type.includes('SET') && action.meta.normalizeKey) {
    // notify about the transformation
    dispatch(dataNormalized({feature: action.meta.feature}));

    // transform the data structure
    const transformed = action.payload.reduce((acc, item) => {
      acc[item[action.meta.normalizeKey]] = item;
      return acc;
    }, {});

    // fire the beer document action
    switch (action.type) {
      case SET_BEER:
        next(setBeer({beer:transformed, normalizeKey: null}))     
        break;

        case SET_JOKE:
          next(setJoke({joke:transformed, normalizeKey: null})) 
        break;

        case SET_TIME:
          next(setTime({time:transformed, normalizeKey: null})) 
        break;
    
      default:
        break;
    }
 /*     // transform the data structure
    const beer = action.payload.reduce((acc, item) => {
      acc[item[action.meta.normalizeKey]] = item;
      return acc;
    }, {});

    // fire the beer document action
    next(setBeer({beer, normalizeKey: null})) */

    //next(action)

  } else {
    next(action);
  }
};
