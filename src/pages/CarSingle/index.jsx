import React from 'react';

import { useParams } from 'react-router-dom';
import { allCars } from '../../database';
import { Container, Name, Image, Description, Price } from './styles';
import NotFound from '../NotFound';
import { formatValue } from '../../functions';

const CarSingle = () => {
   const carId = +useParams().carId;
   const car = allCars().filter(car => car.id === carId)[0];
   if(car === undefined) return <NotFound />;
   const {name, description, price, image} = car;
   
   return (
      <Container>
         <Name>{name}</Name>
         <Image src={image} alt={name}  />
         <Description>{description}</Description>
         <Price>{formatValue(price)}</Price>
      </Container>
   );
}

export default CarSingle;