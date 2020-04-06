import {
    createSelector
} from 'reselect';

export const jokeSelector = createSelector(
    state => state.joke,
    jokeItem => {
        if (jokeItem &&  !jokeItem.error && jokeItem.type) {
            const { id, type, category} = jokeItem;
            let setup = undefined;
            let delivery = undefined;
            let joke = undefined;

            if (type === 'single'){
                joke = jokeItem.joke;
            }else{
                setup = jokeItem.setup;
                delivery = jokeItem.delivery;
            }
            
            return {
                id,
                type,
                category,
                joke,
                setup,
                delivery,
            };
        }
        return {}
    }
);