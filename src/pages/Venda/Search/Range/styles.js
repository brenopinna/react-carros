import styled from "styled-components";

export const Track = styled.div`
   width: 100%;
   height: 14px;
   background-color: white;
   border: 1px solid #ccc;
   margin-top: 8px;
   border-radius: 10px;
   position: relative;
`;

export const Trail = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 0%;
   height: 100%;
   border-radius: inherit;
   background: linear-gradient(
      to bottom,
      rgb(255, 255, 255),
      rgb(200, 200, 200)
   );
   display: flex;
   align-items: center;
`;

export const Thumb = styled.div`
   cursor: pointer;
   position: absolute;
   right: -10px;
   width: 20px;
   height: 20px;
   border-radius: 10px;
   background: inherit;
   border: 1px solid rgb(190, 190, 190);
`;