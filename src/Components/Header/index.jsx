import React from 'react';
import logo from '../../images/logo.jpg';
import Links from '../Links'

import { Container, ResponsiveHeader, Logo } from './styles';

const Header = ({ links }) => {
   return (
      <Container>
         <ResponsiveHeader>
            <Logo src={logo} alt='logo' />
            <Links showContact links={links}/>
         </ResponsiveHeader>
      </Container>
   );
}

export default Header;