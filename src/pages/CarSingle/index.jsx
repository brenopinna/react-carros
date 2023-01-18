import React from 'react';

import { useParams } from 'react-router-dom';
import { allCars } from '../../database';
import { Container, Name, Image, Description, Price } from './styles';

const CarSingle = () => {
   const carId = +useParams().carId;
   const car = allCars().filter(car => car.id === carId)[0];
   const {name, description, price, image} = car;
   
   function formatValue(value){
      value = typeof(value) === 'number' ? value.toFixed(2).toString() : value;
      let formattedNewValue = value.replace('.', ',');
      if(formattedNewValue.length === 7) formattedNewValue = `${formattedNewValue.slice(0, 1)}.${formattedNewValue.slice(1)}`
      else if(formattedNewValue.length === 8) formattedNewValue = `${formattedNewValue.slice(0, 2)}.${formattedNewValue.slice(2)}`
      return 'R$ ' + formattedNewValue;
   }
   
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