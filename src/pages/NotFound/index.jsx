import React from 'react';
import { useNavigate, useParams} from 'react-router-dom';

import { Alert, Container, Explain, GoBack } from './styles';


const NotFound = () => {
   const navigate =  useNavigate();

   return (
      <Container>
         <Alert>404</Alert>
         <Explain>A URL solicitada não existe.</Explain>
         <GoBack onClick={() => navigate('/')}>Voltar para início</GoBack>
      </Container>
   );
}

export default NotFound;