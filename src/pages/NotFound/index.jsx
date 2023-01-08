import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, Container, Explain, GoBack } from './styles';


const NotFound = () => {
   const navigate =  useNavigate();
   return (
      <Container>
         <Alert>404</Alert>
         <Explain>A URL solicitada não existe.</Explain>
         <GoBack onClick={() => navigate(-1)}>Voltar para página anterior</GoBack>
      </Container>
   );
}

export default NotFound;