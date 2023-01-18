import styled from "styled-components";

export const Form = styled.form`
   width: 100%;
`;

export const FormTitle = styled.p`
   text-align: center;
   font-size: 1.2em;
`;

export const Flex = styled.div`
   width: 100%;
   max-width: 400px;
   display: flex;
   gap: 8px;
   flex-direction: column;
   align-items: center;
`;

export const Grid = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: repeat(5, 1fr);
   gap: 8px;

   @media screen and (max-width: 500px){
      display: flex;
      flex-direction: column;
   }
`;

const inputsCss = `
   max-width: 100%;
   color: black !important;
   padding: 5px 10px;
   font-size: 1em;
   border: 1px solid #ccc;
`

export const FormInput = styled.input.attrs({required: true})`
   ${inputsCss}
   grid-column: ${props => props.grid ? props.grid : '1/6'};
`;

export const Textarea = styled.textarea`
   ${inputsCss}
   grid-column: 1/6;
   height: 100px;
   resize: none;
`;