import React from 'react';
import { Container } from './styles';
import Banner from './Banner';
import Destaque from './Destaque';
import Extras from './Extras';

const Home = () => {
   return (
      <Container>
         <Banner />
         <Destaque />
         <Extras />
      </Container>
   );
}

export default Home;