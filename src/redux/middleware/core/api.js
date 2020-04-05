import axios from 'axios';
import {API_REQUEST, apiError, apiSuccess} from "../../actions/api";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
    next(action);
    if (action.type.includes(API_REQUEST)) {
        const {body, url, method, feature} = action.meta;

        axios({
            url,
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(body)
        })
        .then(response => (dispatch(apiSuccess({data: response.data, feature}))))
        .catch(error => dispatch(apiError({error: error, feature})))
    }
};
