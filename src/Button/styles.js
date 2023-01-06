import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
   padding: 8px 32px;
   font-size: 1.2rem;
   font-style: italic;
   color: white;
   background-color: #eb2d2d;
   border: 0;
   margin-top: 10px;

   &:hover{
      background-color: #ca1c1c;
   }

   &:active{
      background-color: #b90b0b;
   }
`;