import styled from "styled-components";

export const Container = styled.div`
   margin-top: 30px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: auto;
   gap: 20px;

   @media screen and (max-width: 800px){
      grid-template-columns: repeat(2, 1fr);
   }

   @media screen and (max-width: 600px){
      grid-template-columns: 1fr;
   }
`;