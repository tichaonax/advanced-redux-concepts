import {JOKE, FETCH_JOKE, setJoke} from "../../actions/joke";
import {API_ERROR, API_SUCCESS, apiRequest} from "../../actions/api";
import {setLoader} from "../../actions/ui";
import {setNotification} from "../../actions/notification";

const JOKE_URL = 'https://sv443.net/jokeapi/v2/joke';

export const jokeMiddleware = () => (next) => (action) => {

  next(action);
  
  switch (action.type) {
    case FETCH_JOKE:
       const url = `${JOKE_URL}/${action.payload}`;
      next([
        apiRequest({body: null, method: 'GET', url, feature: JOKE}),
        setLoader({state: true, feature: JOKE})
      ]);
      break;

    case `${JOKE} ${API_SUCCESS}`:
      next([
        setJoke({joke: action.payload, normalizeKey: 'id'}),
        setLoader({state: false, feature: JOKE})
      ]);
      break;

    case `${JOKE} ${API_ERROR}`:
      next([
        setNotification({message: action.payload.message, feature: JOKE}),
        setLoader({state: false, feature: JOKE})
      ]);
      break;
      
      default:
      break;
  }
};

export default jokeMiddleware;
