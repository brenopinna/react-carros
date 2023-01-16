import React from 'react';

import Car from '../../../Components/Car';
import { Container } from './styles';

import { allCars } from '../../../database';

const Cars = ({value}) => {
   const cars = [...allCars()]
   return (
      <Container>
         {cars.map(car => {
            if(car.price <= value) return <Car img={car.image} name={car.name} description={car.description} price={car.price} />
         })}
      </Container>
   );
}

export default Cars;