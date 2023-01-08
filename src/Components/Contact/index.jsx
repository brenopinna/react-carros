import React from 'react';
import Line from '../Line';
import { Button } from '../Button/styles';
import { ResponsiveContact, Grid, FormInput, Textarea } from './styles';

const Contact = () => {
   return (
      <ResponsiveContact>
         <Line>Contato</Line>
         <form 
            onSubmit={e => {
               e.preventDefault();
               alert('O formulário é só de enfeite!!');
               e.target.reset()
            }}
            style={{textAlign:'center'}}
         >
            <Grid>
               <FormInput placeholder='Nome' />
               <FormInput placeholder='Email' type='email' grid={'1/2'} />
               <FormInput placeholder='Telefone' type='tel' grid={'2/3'} />
               <Textarea placeholder='Mensagem'/>
            </Grid>
            <Button>Enviar</Button>
         </form>
      </ResponsiveContact>
   );
}

export default Contact;