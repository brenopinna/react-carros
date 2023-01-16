import React from 'react';

import { ResponsiveContainer } from '../../../Components/ResponsiveContainer/styles';
import Line from '../../../Components/Line';
import { CarsContainer } from './styles';
import {randomCar} from '../../../database'
import Car from '../../../Components/Car';

const Destaque = () => {
   const cars = [randomCar(), randomCar(), randomCar()];
   return (
      <ResponsiveContainer>
         <Line>Veículos em Destaque</Line>
         <CarsContainer>
            {cars.map(car => <Car img={car.image} name={car.name} description={car.description} price={car.price}/>)}
         </CarsContainer>
      </ResponsiveContainer>
   );
}

export default Destaque;