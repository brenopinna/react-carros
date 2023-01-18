import React from 'react';
import { Button } from '../Button/styles';
import { Flex, Grid, Form, FormInput, Textarea, FormTitle } from './styles';

const Contact = () => {
   return (
         <Flex>
            <FormTitle>Entre em Contato</FormTitle>
            <Form
               onSubmit={e => {
                  e.preventDefault();
                  alert('O formulário é só de enfeite!!');
                  e.target.reset()
               }}
               style={{textAlign:'center'}}
            >
               <Grid>
                  <FormInput placeholder='Nome' />
                  <FormInput grid='1/4' placeholder='Email' type='email' />
                  <FormInput grid='4/6' placeholder='Telefone' type='tel' />
                  <Textarea placeholder='Mensagem'/>
               </Grid>
               <Button>Enviar</Button>
            </Form>
         </Flex>
   );
}

export default Contact;