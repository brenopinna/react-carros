import React from 'react';
import { Button } from '../Button/styles'
import { Container, Image, Name } from './styles';
import { useNavigate } from 'react-router-dom';

const Car = ({ carInfo }) => {
   const navigate = useNavigate();
   const {image, name, description, id} = carInfo;
   return (
      <Container>
         <Image src={image} alt={name}/>
         <Name>{name}</Name>
         <p>{description}</p>
         <Button onClick={() => {navigate(`/car/${id}`); window.scrollTo(0, 0);}}>Mais Detalhes</Button>
      </Container>
   );
}

export default Car;