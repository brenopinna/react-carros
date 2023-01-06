import styled from "styled-components";

export const Container =  styled.ul`
   display: flex;
   gap: clamp(50px, 9vw, 80px);
   list-style: none;
   text-transform: capitalize;
   font-style: italic;
`;

export const LinkContainer = styled.li`
   cursor: pointer;
   transition: transform .1s;

   & > a{
      text-decoration: none;
   }

   & > a.active{
   color: #eb2d2d;
   }

   &:hover{
      transform: translateY(-3px);
      text-shadow: 0px 5px 3px rgba(0,0,0,0.1);
   }
`;