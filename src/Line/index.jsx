import React from 'react';

import { Container, LineDraw, Text } from './styles.js'

const Line = ({ children }) => {
   return (  
      <Container>
         <LineDraw />
         <Text>{children}</Text>
      </Container>
   );
}

export default Line;