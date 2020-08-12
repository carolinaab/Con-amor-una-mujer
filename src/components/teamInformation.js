import React from 'react';
import { teamInformation } from '../information/information'
import { Grid, Typography, Avatar } from '@material-ui/core';
import { useStyles, CirclesImage } from '../styles'
import circles from '../assets/circles.png'


const image = 'https://images.ctfassets.net/hrltx12pl8hq/VZW7M82mrxByGHjvze4wu/216d9ff35b6980d850d108a50ae387bf/Carousel_01_FreeTrial.jpg?fit=fill&w=800&h=450'

const TeamInformation = () => {
    const classes = useStyles()
    return (
        teamInformation.map(element => {
            return (
                <Grid item xs={12} md={4} key={element.id}  >
                    <Grid container justify="center" alignItems="center" className={classes.avatarInformation}>
                        <CirclesImage src={circles} />
                        <Avatar src={image} className={classes.avatar} />
                        <Grid item xs={12} >
                            <Typography variant="h4" align="left" gutterBottom>
                                {element.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}  >
                            <Typography variant="body1" align="left">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but                                                </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            )
        })
    );
}

export default TeamInformation;