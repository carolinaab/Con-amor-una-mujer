import React from 'react';
import {HomeContainer, ContainerCenter, TextContainer, Text, Buttons } from '../styles'
import {Typography} from '@material-ui/core';

const Home = () => {

    return ( 
    <HomeContainer container >
  
     <ContainerCenter container justify="center" alignItems="center">
         <Typography  align="center"variant="h4">
           Bienvenida a nuestra comunidad
         </Typography>
         <TextContainer >
         <Text>
           Buscamos unir fuerzas contra la violencia de genero,<br/>
           creando una comunidad de mujeres apoyando a mujeres. <br/> ¿Te interesa formar parte?
         </Text>
         </TextContainer>
     <Buttons variant="contained">Conocenos</Buttons>
     <Buttons variant="contained">Contacto</Buttons>

     </ContainerCenter>
      
     </HomeContainer>

     );
}
 
export default Home;