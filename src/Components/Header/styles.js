import styled from "styled-components";
import { ResponsiveContainer } from "../ResponsiveContainer/styles";

export const Container = styled.header`
   border-bottom: 3px solid #eb2d2d;
   font-size: 1.8em;
   
   & a{
      color: black;
   }
`;

export const ResponsiveHeader = styled(ResponsiveContainer)`
   display: flex; 
   justify-content: space-between;
   align-items: center;
   padding-top: 19px;
   padding-bottom: 19px;

   @media screen and (max-width: 620px){
      flex-direction: column;
      gap: 20px;
   }
`;