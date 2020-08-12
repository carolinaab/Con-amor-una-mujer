import React from 'react';
import { Grid, Box, Typography, Avatar, } from '@material-ui/core';
import { useStyles, DivContainer, DivImage, Buttons, IconsButton } from '../styles'
import TeamInformation from '../components/teamInformation'
import facebook from '../assets/face.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const KnowUs = () => {

    const classes = useStyles()
    return (
        <Box pt={10}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="center">
                        {/* <Grid container > */}
                        <Grid item xs={12}>
                            <Typography variant="h4" align="center">
                                Conócenos
                           </Typography>
                        </Grid>
                        {
                            <TeamInformation />

                        }


                        {/* </Grid> */}
                    </Grid>
                </Grid>
                {/* description */}
                <Grid item xs={12}>
                    <Grid container className={classes.containerDescription}>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h4">
                                Sobre nosotros
                      </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container justify="center" alignItems="center" className={classes.containerText}>
                                <Typography gutterBottom variant="h6" align="left">¿Dónde surgió con amor una mujer?</Typography>
                                <br /><br />
                                <Typography >
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                        <br /><br />
                                        also the leap into electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s with the release of
                                        Letraset sheets containing Lorem Ipsum passages, and more recently
                                        with desktop publishing software
                                        like Aldus PageMaker including versions of Lorem Ipsum.
                           </Typography>


                            </Grid>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Grid container justify="center" alignItems="center" className={classes.containerImage}>
                                <DivContainer>
                                    <DivImage>
                                    </DivImage>
                                </DivContainer>


                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" className={classes.SocialContainer}>

                                <Buttons>Cóntactanos</Buttons>

                                <IconsButton>
                                    <img width="40px" src={facebook} alt="logo facebook"></img>
                                </IconsButton>
                                <IconsButton>
                                    <InstagramIcon />
                                </IconsButton>
                                <IconsButton>
                                    <TwitterIcon />
                                </IconsButton>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
}

export default KnowUs;