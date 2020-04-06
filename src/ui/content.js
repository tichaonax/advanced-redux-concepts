import React from 'react'
import { Grid } from '@material-ui/core'
import Joke  from './joke/joke'
import Beer from './beer/beer';

const Content = props => {
    return (
        <Grid container justify="center" direction="row" alignItems="flex-start">
            <Grid item xs={12} direction="row" justify="center" alignItems="center">
                <h1>Advanced Redux Concepts</h1>
            </Grid>
            <Grid container spacing={2} alignItems="center" justify="center" direction="row">
                <Grid item xs={10} sm={5}>
                    <Joke/>
                </Grid>
                <Grid item xs={10} sm={7}>
                    <Beer/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Content
