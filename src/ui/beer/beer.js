import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {favoriteBeerSelector} from '../../redux/selectors/beer'
import {fetchBeer} from '../../redux/actions/beer'

export const Beer = ({onFetchBeer, imageUrl, id, name, tagline, firstBrewed, brewerTips}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Beers from <a href="https://api.punkapi.com/v2/beers">https://api.punkapi.com/v2/beers</a> 
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {tagline}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {brewerTips}
                </Typography>
                <Typography variant="body2" component="p">
                    First Brewed {firstBrewed}
                </Typography>
                <CardActions>
                    <Button variant="contained" size="small" 
                        onClick={ () => onFetchBeer('random')}>
                            Get Another Beer
                    </Button>
                </CardActions>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image={imageUrl}
                title={name}
            />
            <CardMedia
                className={classes.blank}
                image=""
                title=""
            />
        </Card>
    )
}

Beer.propTypes = {
    imageUrl: PropTypes.string,
    id: PropTypes.string,
    nme: PropTypes.string,
    name: PropTypes.number,
    tagline: PropTypes.string,
    firstBrewed: PropTypes.string,
    brewerTips: PropTypes.array,
}

const mapStateToProps = (state) => {
    const beer = favoriteBeerSelector(state);
    return{...beer}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchBeer: (type) => {
          dispatch(fetchBeer(type));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Beer)

const useStyles = makeStyles({
    root: {
        display: "flex"
      },
      details: {
        display: "flex",
        flexDirection: "column"
      },
      content: {
        flex: "1 0 auto"
      },
      cover: {
        width: 150,
      },
      blank: {
        width: 50,
      },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });