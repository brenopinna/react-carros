import React from 'react';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound'
import Venda from '../pages/Venda';
import { Container  } from './styles';
import CarSingle from '../pages/CarSingle';


const App = () => {
  const links = ['home', 'venda', 'contato'];

  return (
    <Router>
      <Container>
        <Header links={links}/>
        <Routes>
          <Route
            path='/*'
            element={<NotFound />}
          />
          <Route
            path='/'
            exact
            element={<Home />}
          />
          <Route
            path='/venda'
            element={<Venda />}
          />
          <Route
            path='/car/:carId'
            element={<CarSingle />}
          />
        </Routes>
        <Footer links={links}/>
      </Container>
    </Router>
  );
}

export default App;
