import React from 'react'
import PropTypes from 'prop-types'
import Joke  from './joke/joke'
import { Grid } from '@material-ui/core'

const Content = props => {
    return (
        <Grid container justify="center" direction="column" alignItems="center">
            <Grid item xs={12} direction="row" justify="center" alignItems="center">
                <h1>Advanced Redux Concepts</h1>
            </Grid>
            <Grid container spacing={2} alignItems="center" justify="center" direction="row">
                <Grid item xs={10} sm={6}>
                    <Joke/>
                </Grid>
                <Grid item xs={10} sm={6}>
                    <Joke/>
                </Grid>
            </Grid>
        </Grid>
    )
}

Content.propTypes = {

}

export default Content
