import React from 'react';
import {Grid} from '@material-ui/core';

import Header from './ui/header';
import Content from './ui/content';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import {fetchJoke} from './redux/actions/joke';

const App = (props) => {
  
  const { onFetchJoke } = props;
  const [timerState, setTimer] = useState({});
  useEffect(() => {
    const pollStatus = () => onFetchJoke('programming');
    let timer = setInterval(pollStatus, 15000);
    setTimer({ timer });

    return () => clearInterval(timerState);
  }, [onFetchJoke]);
 

  return (
    <Grid container direction="column" justify="center">
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container direction="row">
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Content/>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchJoke: (category) => {
      dispatch(fetchJoke(category));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
