import styled from "styled-components";

import { ResponsiveContainer } from "../ResponsiveContainer/styles";

export const ResponsiveContact = styled(ResponsiveContainer)`
   max-width: 700px;
`;

export const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
`;

const inputsCss = `
   padding: 8px 16px;
   font-size: 1.1em;
   border: 1px solid #ccc;
`

export const FormInput = styled.input.attrs({required: true})`
   ${inputsCss}
   grid-column: ${props => props.grid ? props.grid : '1/3'};

   @media screen and (max-width: 600px){
      grid-column: 1/3;
   }
`;

export const Textarea = styled.textarea`
   ${inputsCss}
   grid-column: 1/3;
   height: 100px;
   resize: none;
`;