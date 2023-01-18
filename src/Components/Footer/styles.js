import styled from "styled-components";
import { ResponsiveContainer } from "../ResponsiveContainer/styles";

export const Container = styled.footer`
   background-color: #252525;
   position: sticky;
   top: 100%;
   margin-top: 160px;
   font-size: 1.4rem;

   & * {
      color: white;
   }
`;

export const ResponsiveFooter = styled(ResponsiveContainer)`
   display: flex;
   flex-direction: row-reverse;
   justify-content: space-between;
   align-items: center;
   gap: 20px;
   padding-top: 40px;
   padding-bottom: 40px;

   @media screen and (max-width: 800px){
      flex-direction: column;
      gap: 80px;
   }
`;