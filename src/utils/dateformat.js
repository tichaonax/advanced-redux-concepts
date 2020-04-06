
import moment from 'moment';

export const dateFromUtc = (utc) => (moment.utc(utc).toDate().toUTCString());

export const formatTime = (utc) =>( moment(utc).format("HH:mm"));