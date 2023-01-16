import React from 'react';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound'
import Venda from '../pages/Venda';
import { Container  } from './styles';


const App = () => {
  const links = ['home', 'venda', 'sobre'];

  return (
    <Router>
      <Container>
        <Header links={links}/>
        <Routes>
          <Route
            path='/*'
            element={<NotFound links={links} />}
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
            path='/sobre'
            element={<h1>sobre</h1>}
          />
        </Routes>
        <Footer links={links}/>
      </Container>
    </Router>
  );
}

export default App;
