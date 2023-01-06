import React from 'react';
import { Button } from '../Button/styles'
import { Container, Image, Name } from './styles';

const Car = ({img, name, description}) => {
   return (
      <Container>
         <Image src={img} alt={name}/>
         <Name>{name}</Name>
         <p>{description}</p>
         <Button>Mais Detalhes</Button>
      </Container>
   );
}

export default Car;