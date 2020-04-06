import {BEER, FETCH_BEER, setBeer} from "../../actions/beer";
import {API_ERROR, API_SUCCESS, apiRequest} from "../../actions/api";
import {setLoader} from "../../actions/ui";
import {setNotification} from "../../actions/notification";

const BEER_URL = 'https://api.punkapi.com/v2/beers';

export const beerMiddleware = () => (next) => (action) => {

  next(action);
  
  switch (action.type) {
    case FETCH_BEER:
      const url = `${BEER_URL}/${action.payload}`;
      next([
        apiRequest({body: null, method: 'GET', url, feature: BEER}),
        setLoader({state: true, feature: BEER})
      ]);
      break;

    case `${BEER} ${API_SUCCESS}`:
      next([
        setBeer({beer: action.payload, normalizeKey: 'id'}),
        setLoader({state: false, feature: BEER})
      ]);
      break;

    case `${BEER} ${API_ERROR}`:
      next([
        setNotification({message: action.payload.message, feature: BEER}),
        setLoader({state: false, feature: BEER})
      ]);
      break;
      
      default:
      break;
  }
};

export default beerMiddleware;
