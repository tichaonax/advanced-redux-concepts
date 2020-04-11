import {fetchBeer} from '../../actions/beer';
import {FETCH_JOKE, fetchJoke} from '../../actions/joke';
import {fetchTime} from '../../actions/worldtime';

// this routing middleware needs to come earlier than the others that depend on it
export const dispatcherMiddleware = (state) => (next) => (action) => {
    //next(action);
    switch (action.type) {
        case FETCH_JOKE:
            // This pattern is an example where one action can result in multiple one
            // Note we are allowing the fetch joke to go through we could decide not
            // A good example is a situation where when say purchase is complete event
            // is sent out you want to provide targeted events to make it easy to debug
            // PURCHASE_COMPLETE spawns REQUEST_SHIPPING, NOTIFY_ACCOUNTING
            // This is such that PURCHASE_COMPLETE is not listened to directly by 
            // two different middleware for example
            
            // Each time someone requests a joke I want
            // to know what time they are doing it and then reward them with a beer
            next(fetchJoke(action.payload));
            //request beer after 3 seconds
            setTimeout(() => { next(fetchBeer('random')); }, 3000);
            next(fetchTime('ip'));  
            break;

        default:
            // just pass the action along
            next(action);
            //console.log(state.getState());
            break;
    }
};