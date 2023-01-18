import styled from "styled-components";
import {ResponsiveContainer} from '../../Components/ResponsiveContainer/styles';

export const Container = styled(ResponsiveContainer)`
   display: grid;
   gap: 10px;
   grid-template-columns: 2fr 1fr;
   margin-top: 100px;
   max-width: 1100px;

   @media screen and (max-width: 800px){
      grid-template-columns: 1fr;
      justify-items: center;
   }
`;

export const Image = styled.img`
   width: 100%;
   grid-column: 1/3;
   border: 5px solid #eb2d2d;

   @media screen and (max-width: 800px){
      grid-column: auto;
   }
`;

export const Name = styled.p`
   font-size: 2.3em;
   font-style: italic;
`;

export const Description = styled.p`
   font-size: 1.5em;
   text-align: justify;
`;

export const Price = styled.p`
   font-size: 2em;
   justify-self: end;

   @media screen and (max-width: 800px){
      justify-self: auto;
   }
`;