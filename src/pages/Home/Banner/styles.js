import styled from "styled-components";
import Bg from '../../../images/bg.jpg';
import { ResponsiveContainer } from '../../../Components/ResponsiveContainer/styles.js';

export const Container = styled.section`
   height: 700px;
   background: black url(${Bg}) no-repeat right bottom;
   background-size: contain;

   @media screen and (max-width: 620px){
      height: 400px;
   }
`;

export const Polygons = styled.div`
   position: absolute;
   top: 10%;
   left: 10%;

   @media screen and (max-width: 620px){
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
`;

export const Polygon = styled.div`
   --polygon-side: 0.34em;
   --order: ${props => props.order};
   --base-polygon-size: 9em;

   position: relative;
   left: calc((4 - var(--order)) * var(--polygon-side));

   width: calc(var(--base-polygon-size) + (var(--order) - 1) * (100px/3));

   background-color: ${props => props.bg};
   color: ${props => props.bg === 'white' ? 'black' :  'white'};

   padding: 0px 20px;

   clip-path: polygon(
      var(--polygon-side) 0,
      100% 0,
      calc(100% - var(--polygon-side)) 100%,
      0 100%
   );

   font-size: clamp(18px, 8vw, 36px);
   text-transform: uppercase;
   font-style: italic;

   &:not(:last-child){margin-bottom: 16px;}

   @media screen and (max-width: 620px){
      --base-polygon-size: 7em;
   }
`;

export const ResponsiveBanner = styled(ResponsiveContainer)`position: relative;`;