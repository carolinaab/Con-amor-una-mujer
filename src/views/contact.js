import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core'
import { ContactImage, ContactContainer, ContactDescription, SocialIcon } from '../styles'
import facebook from '../assets/facebook.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconsButton } from '../styles'


const Contact = () => {
    return (
        <ContactContainer container>
            <Grid item xs={12} md={6}>
                <ContactDescription container >
                    <Typography variant="h4" align="center"> Contacto</Typography>
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but
                    </Typography>
                    <Typography variant="subtitle1" justify="left"> Email: por.una.mujer.com</Typography>

                </ContactDescription>
                <Grid container alignItems="center">


                    <IconButton style={{ 
                        background: "#1877f2", 
                        marginLeft:65
                        }}>
                        <img width="40px" src={facebook} alt="logo facebook"></img>
                    </IconButton >
                    <SocialIcon margin="10px" background= 'radial-gradient(circle at 10% 107%, #fdf497 0%, #fdf497 2%, #fd5949 40%,#d6249f 60%,#285AEB 100%)'>
                        <InstagramIcon fontSize="large"/>
                    </SocialIcon >
                    <SocialIcon background= "#00acee">
                        <TwitterIcon fontSize="large"/>
                    </SocialIcon >
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <ContactImage />

            </Grid>



        </ContactContainer >
    );
}

export default Contact;