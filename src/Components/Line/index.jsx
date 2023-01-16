import React from 'react';

import { Container, LineDraw, Text } from './styles.js'

const Line = ({ children, first }) => {
   return (  
      <Container style={{marginTop: first ? 80 : 0}}>
         <LineDraw />
         <Text>{children}</Text>
      </Container>
   );
}

export default Line;