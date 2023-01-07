import React from 'react';

import { Container, Servicos, Depoimentos, Title } from './styles';
import { Button } from '../../../Components/Button/styles';

import Slider from './Slider';

const Extras = () => {
   const depoimentos = [
      {
         author: 'Zezinho da JBL',
         content: 'Muleque curti muito essa empresa muito braba me ajudou a consertar meu Corolla rebaixado sô, nunca fui tão feliz recomendo demais'
      },
      {
         author: "Batman",
         content: 'Something in the w... não pera, é pra falar do carro né? esses mitos consertaram meu batmóvel agora eu posso ficar por Gotham sentando a mão em todo mundo de novo'
      },
      {
         author: 'Manuel Gomes, Caneta Azul',
         content: 'Olha se você me ama, me ligue e me recomende essa empresa muito legal. Opala azul azul opala, opala azul foi consertado nessa empresa.'
      }
   ]
   return (
      <Container>
         <Servicos>
            <Title>Serviços</Title>
            <ul>
               <li>Compra</li>
               <li>Venda</li>
               <li>Consignação</li>
               <li>Consultoria de Veículos</li>
               <li>Indicação de mecânicos e peçcas</li>
            </ul>
            <Button>Saiba Mais</Button>
         </Servicos>
         <Depoimentos>
            <Title>Depoimentos</Title>
            <Slider depoimentos={depoimentos} />
         </Depoimentos>
      </Container>
   );
}

export default Extras;