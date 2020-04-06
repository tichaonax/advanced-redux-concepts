import {
    createSelector
} from 'reselect';

export const timeSelector = createSelector(
    state => state.time,
    worldTime => {
        if (worldTime.utc_datetime) {
            const { utc_datetime, datetime, client_ip } = worldTime;
            return {
                utcDateTime: utc_datetime,
                datetime,
                clientIp: client_ip
            };
        }
        return {}
    }
);