import {TIME, FETCH_TIME, setTime} from "../../actions/worldtime";
import {API_ERROR, API_SUCCESS, apiRequest} from "../../actions/api";
import {setLoader} from "../../actions/ui";
import {setNotification} from "../../actions/notification";

const TIME_URL = 'http://worldtimeapi.org/api';

export const timeMiddleware = () => (next) => (action) => {

  next(action);
  
  switch (action.type) {
    case FETCH_TIME:
       const url = `${TIME_URL}/${action.payload}`;
      next([
        apiRequest({body: null, method: 'GET', url, feature: TIME}),
        setLoader({state: true, feature: TIME})
      ]);
      break;

    case `${TIME} ${API_SUCCESS}`:
      next([
        setTime({time: action.payload, normalizeKey: 'id'}),
        setLoader({state: false, feature: TIME})
      ]);
      break;

    case `${TIME} ${API_ERROR}`:
      next([
        setNotification({message: action.payload, feature: TIME}),
        setLoader({state: false, feature: TIME})
      ]);
      break;
      
      default:
      break;
  }
};

export default timeMiddleware;
