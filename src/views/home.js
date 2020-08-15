import React from 'react';
import { HomeContainer, ContainerCenter, TextContainer, Text, Buttons } from '../styles'
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import {useStyles} from '../styles'

const Home = () => {
  const classes = useStyles()
  return (
    <HomeContainer container >

      <ContainerCenter container justify="center" alignItems="center">
        <Typography align="center" variant="h4">
          Bienvenida a nuestra comunidad
         </Typography>
        <TextContainer >
          <Text>
            Buscamos unir fuerzas contra la violencia de genero,<br />
           creando una comunidad de mujeres apoyando a mujeres. <br /> ¿Te interesa formar parte?
         </Text>
        </TextContainer>
        <Link to="/conocenos" className={classes.link}>
          <Buttons variant="contained">Conocenos</Buttons>
        </Link>
        <Link to="contacto" className={classes.link}>
          <Buttons variant="contained">Contacto</Buttons>
        </Link>

      </ContainerCenter>

    </HomeContainer>

  );
}

export default Home;