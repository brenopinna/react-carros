import React from 'react';
import Range from './Range';
import {Container, Text} from './styles'
import {formatValue} from'../../../functions'

const Search = ({value, setValue}) => {
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