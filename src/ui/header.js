import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {makeStyles} from '@material-ui/styles';
import Time from './time/time'

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex:1
    }
}))

const Header = props => {
    const classes = useStyles();

    return (
   <AppBar position="static">
       <Toolbar>
           <Typography className={classes.typographyStyles}>
               <Time/>
            </Typography>
           <AcUnitIcon/>
       </Toolbar>
   </AppBar>
    )
}

Header.propTypes = {

}

export default Header



