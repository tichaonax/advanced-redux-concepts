import {
    createSelector
} from 'reselect';

export const favoriteBeerSelector = createSelector(
    state => state.beer,
    beerItem => {
        if (beerItem && beerItem.favorite) {
            const {
                image_url : imageUrl,
                id,
                name, 
                tagline, 
                first_brewed : firstBrewed,
                brewers_tips: brewerTips
            } = Object.values(beerItem.favorite)[0];
            
            return {
                imageUrl,
                id,
                name,
                tagline,
                firstBrewed,
                brewerTips,
            };
        }
        return {}
    }
);