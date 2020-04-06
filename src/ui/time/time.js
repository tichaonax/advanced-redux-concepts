import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {timeSelector} from '../../redux/selectors/time'
import {fetchTime} from '../../redux/actions/worldtime';
import {formatTime} from '../../utils/dateformat';

const Time = ({utcDateTime, datetime, clientIp}) => {

    return (
        <div>
            IP: {clientIp} Time: {formatTime(datetime)}
        </div>
    )
}

Time.propTypes = {
    utcDateTime: PropTypes.string,
    datetime: PropTypes.string,
    clientIp: PropTypes.string,
}

const mapStateToProps = (state) => {
    const time = timeSelector(state);
    return {
      ...time,
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onFetchTime: () => {
        dispatch(fetchTime());
      },
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Time)
