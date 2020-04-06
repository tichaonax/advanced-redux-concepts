import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchJoke } from '../../redux/actions/joke';
import {jokeSelector} from '../../redux/selectors/joke';

const Joke = ({onFetchJoke, joke, id, type, category, setup, delivery, categories}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Jokes from <a href="https://sv443.net/jokeapi/v2">https://sv443.net/jokeapi/v2</a> 
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
           {category}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
           {setup}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {delivery}
          </Typography>
          <Typography variant="body2" component="p">
            {joke}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" 
            onClick={ () => onFetchJoke('Miscellaneous')}>
              Get Another Joke
          </Button>
        </CardActions>
      </Card>
    )
}

Joke.propTypes = {
    category: PropTypes.string,
    type: PropTypes.string,
    joke: PropTypes.string,
    id: PropTypes.number,
    setup: PropTypes.string,
    delivery: PropTypes.string,
    categories: PropTypes.array,
} 

const mapStateToProps = (state) => {
    const joke = jokeSelector(state);
    return {
      ...joke,
       categories: [
        'Any',
        'Miscellaneous',
        'Programming',
        'Dark'
      ], 
    };;
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onFetchJoke: (category) => {
        dispatch(fetchJoke(category));
      },
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Joke)

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
