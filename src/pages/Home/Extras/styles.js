import styled from "styled-components";

export const Container = styled.section`
   display: flex;
   flex-wrap: wrap;
`;

const ExtraDiv = styled.div`
   color: white;
   width: 50%;
   padding: 60px 10%;
   height: 400px;

   display: flex;
   flex-direction: column;
   gap: 10px;
   align-items: flex-start;

   @media screen and (max-width:1024px){
      padding: 50px 8%;
   }

   @media screen and (max-width:768px){
      width: 100%;
   }
`;

export const Title = styled.p`
   font-style: italic;
   font-size: 2em;
`;

export const Servicos = styled(ExtraDiv)`
   background-color: #242424;
   list-style-position: inside;
`;

export const Depoimentos = styled(ExtraDiv)`
   background-color: #eb2d2d;
`;

export const Quote = styled.q`
   text-align: justify;
   font-size: 1.2em;
`;
