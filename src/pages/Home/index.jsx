import React from 'react';
import { Container } from './styles';
import Banner from './Banner';
import Destaque from './Destaque';
import Extras from './Extras';
import Contact from '../../Components/Contact';

const Home = () => {
   return (
      <Container>
         <Banner />
         <Destaque />
         <Extras />
         <Contact />
      </Container>
   );
}

export default Home;