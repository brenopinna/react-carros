import React, {useState} from 'react';
import Line from '../../Components/Line';
import {Container} from './styles';
import Search from './Search';
import Cars from './Cars';

const Venda = () => {
   const [value, setValue] = useState(0);
   return (
      <Container>
         <Line first>Venda</Line>
         <Search value={value} setValue={setValue} />
         <Cars value={value} />
      </Container>
   );
}

export default Venda;