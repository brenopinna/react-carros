import React from 'react';
import Range from './Range';
import {Container, Text} from './styles'

const Search = ({value, setValue}) => {
   function formatValue(value){
      value = typeof(value) === 'number' ? value.toFixed(2).toString() : value;
      let formattedNewValue = value.replace('.', ',');
      if(formattedNewValue.length === 7) formattedNewValue = `${formattedNewValue.slice(0, 1)}.${formattedNewValue.slice(1)}`
      else if(formattedNewValue.length === 8) formattedNewValue = `${formattedNewValue.slice(0, 2)}.${formattedNewValue.slice(2)}`
      return 'R$ ' + formattedNewValue;
   }

   return (
      <Container>
         <Text>Filtre por preço</Text>
         <Range
            value={value}
            setValue={setValue}
         />
         <label htmlFor="price"><Text>{formatValue(value)}</Text></label>
      </Container>
   );
}

export default Search;