import styled from "styled-components";

export const Container = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   width: 100vw;
   height: 100vh;
   background-color: #2e2e2e;
   color: white;
text-align: center;
`;

export const Alert = styled.p`
   font-size: 8em;
`;

export const Explain = styled.p`
   font-size: 2em;
`;

export const GoBack = styled.p`
   cursor: pointer;
   text-decoration: underline;
   font-size: 1.3em;
`;