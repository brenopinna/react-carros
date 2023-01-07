import styled from "styled-components";

export const CarsContainer = styled.div`
   display: flex;
   gap: 15px;

   @media screen and (max-width: 620px){
      flex-direction: column;
   }
`;