import React from 'react';

import Car from '../../../Components/Car';
import { Container } from './styles';

import { allCars } from '../../../database';

const Cars = ({value}) => {
   const cars = [...allCars()]
   return (
      <Container>
         {cars.filter(car => car.price <= value).map((car, index) => <Car key={index} carInfo={car} />)}
      </Container>
   );
}

export default Cars;