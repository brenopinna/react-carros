import React from 'react';
import Contact from '../Contact';
import Links from '../Links';
import { Container, ResponsiveFooter } from './styles';

const Footer = ({ links }) => {
   return (
      <Container>
         <ResponsiveFooter>
            <Contact />
            <Links links={links} />
         </ResponsiveFooter>
      </Container>
   );
}

export default Footer;