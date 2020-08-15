import React from 'react';

import { Grid, Box, Typography } from '@material-ui/core'
import SubMenuBlog from '../components/subMenuBlog'
import {useStyles} from '../styles'


const Blogs = () => {
    const classes = useStyles()
    return (
        <Box pt={5}>
            <Grid container
                justify="center"
                alignItems="center"
                className={classes.containerPost}>
                <Typography variant="h4">
                    Blog
         </Typography>
                <Grid item xs={12}>
                    <SubMenuBlog />
                </Grid>
            </Grid>
        </Box>

    );
}

export default Blogs;