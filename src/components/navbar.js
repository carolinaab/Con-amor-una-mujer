import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Container, Hidden } from '@material-ui/core'
import { useStyles } from '../styles'
import {Link} from 'react-router-dom'

const Nabvar = () => {
    const classes = useStyles()
    return (
        <Hidden smDown>
            <AppBar position="static"  >
                <Toolbar className={classes.appbar}>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Typography variant="h6" className={classes.title}>
                            icon
                      </Typography>
                    </IconButton>
                    <Container className={classes.menuContainer}>
                        <Link to="/" className={classes.link}>
                        <Typography selected variant="body1" align="center" className={classes.menuItem}>
                            Inicio
                      </Typography>
                      </Link>
                      <Link to="/blog" className={classes.link}>
                        <Typography variant="body1" align="center" className={classes.title}>
                            Blog
                      </Typography>
                      </Link>
                      <Link to="/conocenos" className={classes.link}>
                        <Typography variant="body1" align="center" className={classes.title}>
                            Conócenos
                      </Typography>
                      </Link>
                      <Link to="/contacto" className={classes.link}>
                        <Typography variant="body1" align="center" className={classes.title}>
                            Contacto
                      </Typography>
                      </Link>
                      <Link to="/directorio" className={classes.link}>
                        <Typography variant="body1" align="center" className={classes.title}>
                            Directorio
                      </Typography>
                      </Link>
                    </Container>
                    <Button color="inherit">Newsletter</Button>

                </Toolbar>
            </AppBar>
            </Hidden>
    );
}

export default Nabvar;