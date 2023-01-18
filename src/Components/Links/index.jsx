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
                  {
                     link !== 'contato' ?
                     <NavLink
                        to={link === 'home' ? '/' : `/${link}`}
                        onClick={() => window.scrollTo(0, 0)}
                     >
                        {link}
                     </NavLink> :
                     <a href='#contato'>Contato</a>
                  }
                  
               </LinkContainer>
               )
            })}
         </Container>
      </nav>
   );
}

export default Links;