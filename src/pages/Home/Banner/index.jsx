import React from 'react';

import { Container, ResponsiveBanner, Polygons, Polygon } from './styles';

const Banner = () => {
   return (
      <Container>
         <ResponsiveBanner>
            <Polygons>
               <Polygon order='1' bg='red'>consultoria</Polygon>
               <Polygon order='2' bg='red'>compra</Polygon>
               <Polygon order='3' bg='red'>venda</Polygon>
               <Polygon order='4' bg='white'>contato@gmail.com</Polygon>
            </Polygons>
         </ResponsiveBanner>
      </Container>
   );
}

export default Banner;