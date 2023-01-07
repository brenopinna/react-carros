import React from 'react';
import Links from '../Links';
import { Container, Copyright, ResponsiveFooter } from './styles';

const Footer = ({ links }) => {
   return (
      <Container>
         <ResponsiveFooter>
            <Links links={links} />
            <Copyright>Todos os direitos reservados</Copyright>
         </ResponsiveFooter>
      </Container>
   );
}

export default Footer;