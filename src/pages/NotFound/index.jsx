import React from 'react';
import { useNavigate, useParams} from 'react-router-dom';

import { Alert, Container, Explain, GoBack } from './styles';


const NotFound = ({ links }) => {
   const navigate =  useNavigate();
   const params = useParams();

   function goBack(){
      const separatedParams = params['*'].split('/');
      const goTo = links.includes(separatedParams[0]) ? separatedParams[0] : '/';
      navigate(goTo);
   }

   return (
      <Container>
         <Alert>404</Alert>
         <Explain>A URL solicitada não existe.</Explain>
         <GoBack onClick={goBack}>Voltar para página anterior</GoBack>
      </Container>
   );
}

export default NotFound;