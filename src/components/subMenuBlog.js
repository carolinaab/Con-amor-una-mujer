import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from '../styles'
import { Link } from 'react-router-dom'


const SubMenuBlog = () => {

    const classes = useStyles()

    return (
        <Grid container justify="space-evenly" alignItems="center" className={classes.menuBlog}>
            <Typography variant="h6">Politica</Typography>
            <Link to="/salud" className={classes.link}>
            <Typography variant="h6">Salud</Typography>
            </Link>
            <Link to="/economia" className={classes.link}>
                <Typography variant="h6">Economía</Typography>
            </Link>
            <Link to="#" className={classes.link}>
                <Typography variant="h6">Sexo y relaciones</Typography>
            </Link>
            <Typography variant="h6">Inspiración</Typography>

        </Grid>
    );
}

export default SubMenuBlog;