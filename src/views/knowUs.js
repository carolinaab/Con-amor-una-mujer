import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { useStyles, DivContainer, DivImage, Buttons } from '../styles'


const KnowUs = () => {

    const classes = useStyles()
    return (
        <Box>
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <Grid container >
                        <Grid item xs={12}>
                            <Typography variant="h4" align="center">
                                Conócenos
                           </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container>

                            </Grid>
                            <Typography variant="h4" align="center">
                                Nombre
                           </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h4" align="center">
                                Nombre
                           </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h4" align="center">
                                Nombre
                           </Typography>
                        </Grid>

                    </Grid>
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
                        <Typography gutterButton variant="h5" align="center">¿Dónde surgió con amor una mujer?</Typography>
                        <Grid container justify="center" alignItems="center" className={classes.containerText}>

                            <Typography>
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
                            <Grid container justify="center" alignItems="center">
                                <Buttons>uno</Buttons>
                                <Buttons>uno</Buttons>
                                <Buttons>uno</Buttons>
                                <Buttons>uno</Buttons>
                            </Grid>
                        </Grid>

                </Grid>
            </Grid>


        </Box>
    );
}

export default KnowUs;