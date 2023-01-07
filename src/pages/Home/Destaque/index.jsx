import React from 'react';

import { ResponsiveContainer } from '../../../Components/ResponsiveContainer/styles';
import Line from '../../../Components/Line';
import Car from '../../../Components/Car';
import carImage from '../../../images/bg.jpg';
import {  CarsContainer } from './styles';

const Destaque = () => {
   return (
      <ResponsiveContainer>
         <Line>Veículos em Destaque</Line>
         <CarsContainer>
            <Car img={carImage} name='Carro 1' description="Carro massa 1982" />
            <Car img={carImage} name='Carro 2' description="Maneirin anos 90" />
            <Car img={carImage} name="Carro 3" description="Um bem irado dos 2000" />
         </CarsContainer>
      </ResponsiveContainer>
   );
}

export default Destaque;