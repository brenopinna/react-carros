import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, LinkContainer } from './styles';

function Links({ links }) {
   return (
      <nav>
         <Container>
            {links.map(link => {
               return (
               <LinkContainer key={link}>
                  <NavLink
                     to={link === 'home' ? '/' : `/${link}`}
                  >
                     {link}
                  </NavLink>
               </LinkContainer>
               )
            })}
         </Container>
      </nav>
   );
}

export default Links;