import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {useStyles} from '../styles'

const Footer = () => {

 const classes = useStyles()

    return ( 
        <Grid container alignItems="center" className={classes.footer}>
            <Grid xs={12}>
                <Typography align="center">&copy; 2020 Con Amor... una mujer</Typography>
            </Grid>
        </Grid>
     );
}
 
export default Footer;