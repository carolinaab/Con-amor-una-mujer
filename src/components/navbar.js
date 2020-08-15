import React, { Fragment } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Container,
    Menu,
    MenuItem,
    Hidden,
    Grid
} from '@material-ui/core'
import { useStyles } from '../styles'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';


const Nabvar = () => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Fragment>
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

            {/* mobile menu */}
            <Hidden mdUp>
                <Grid container className={classes.appbarMobile}>
                <p>
                   
                       icon
                 </p>
                    <Button 
                    className={classes.buttonBar}
                    aria-controls="simple-menu"
                     aria-haspopup="true" 
                     onClick={handleClick}>
                       <MenuIcon fontSize="large"/>
                 </Button>
                    <Menu
                   
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}

                    >
                        <Link to="/" className={classes.link}>
                        <MenuItem onClick={handleClose}>Inicio</MenuItem>
                        </Link>
                        <Link to="/blog" className={classes.link}>
                        <MenuItem onClick={handleClose}>Blog</MenuItem>
                        </Link>
                        <Link to="/conocenos" className={classes.link}>
                        <MenuItem onClick={handleClose}>Conócenos</MenuItem>
                        </Link>
                        <Link to="/contacto"className={classes.link} >
                        <MenuItem onClick={handleClose}>Contacto</MenuItem>
                        </Link>
                        <Link to="/directorio" className={classes.link}>
                        <MenuItem onClick={handleClose}>Directorio</MenuItem>
                        </Link>
                    </Menu>
                </Grid>
            </Hidden>
        </Fragment>
    );
}

export default Nabvar;