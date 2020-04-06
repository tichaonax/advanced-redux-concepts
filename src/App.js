import React from 'react';
import {Grid} from '@material-ui/core';

import Header from './ui/header';
import Content from './ui/content';

function App() {
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

export default App;
