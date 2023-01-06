import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
import Home from '../pages/Home';
import { Container, StyledRoutes } from './styles';


const App = () => {
  const links = ['home', 'venda', 'sobre'];

  return (
    <Router>
      <Container>
        <Header links={links}/>
        <Routes>
          <Route
            className='route'
            path='/*'
            element={<h1>404</h1>}
          />
          <Route
            className='route'
            path='/'
            exact
            element={<Home />}
          />
          <Route
            className='route'
            path='/venda'
            element={<h1>venda</h1>}
          />
          <Route
            className='route'
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
