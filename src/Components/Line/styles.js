import styled from "styled-components";

export const Container = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin-bottom: 10px;
`;

export const LineDraw = styled.div`
   position: absolute;
   width: 100%;
   height: 3px;
   background-color: black;
`;

export const Text = styled.span`
   z-index: 1;
   padding: 0 10px;
   background-color: white;
   font-style: italic;
   font-size: 1.7em;
   text-align: center;
   font-weight: bold;
   text-transform: uppercase;
`;