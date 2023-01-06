import React from 'react';
import logo from '../images/logo.jpg';
import Links from '../Links'

import { Container, ResponsiveHeader } from './styles';

const Header = ({ links }) => {
   return (
      <Container>
         <ResponsiveHeader>
            <img src={logo} alt='logo' />
            <Links links={links}/>
         </ResponsiveHeader>
      </Container>
   );
}

export default Header;