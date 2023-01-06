import React from 'react';
import Line from '../../Line';
import Car from '../../Car';
import carImage from '../../images/bg.jpg';
import { Banner, Polygon, Polygons, ResponsiveBanner, Destaque, CarsContainer } from './styles';
import { ResponsiveContainer } from '../../ResponsiveContainer/styles'

const Home = () => {
   return (
      <>
         <Banner>
            <ResponsiveBanner>
               <Polygons>
                  <Polygon order='1' bg='red'>consultoria</Polygon>
                  <Polygon order='2' bg='red'>compra</Polygon>
                  <Polygon order='3' bg='red'>venda</Polygon>
                  <Polygon order='4' bg='white'>contato@gmail.com</Polygon>
               </Polygons>
            </ResponsiveBanner>
         </Banner>
         <Destaque>
            <ResponsiveContainer>
               <Line>Veículos em Destaque</Line>
               <CarsContainer>
                  <Car img={carImage} name='Carro 1' description="Carro massa 1982" />
                  <Car img={carImage} name='Carro 2' description="Maneirin anos 90" />
                  <Car img={carImage} name="Carro 3" description="Um bem irado dos 2000" />
               </CarsContainer>
            </ResponsiveContainer>
         </Destaque>
      </>
   );
}

export default Home;