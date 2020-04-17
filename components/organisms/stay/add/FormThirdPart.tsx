import React from 'react';
import { H2, FormLabel, CheckBox } from '../../../atoms';
import { Column, Row } from '../../../grid';

export const FormThirdPart = () => (
  <form>
    <Row>
      <Column className="w-full text-center mb-6">
        <H2>Que puedes ofrecerle al huesped?</H2>
      </Column>
    </Row>
    <Row className="flex-wrap">
      <Column className="w-full mb-8">
        <FormLabel>Hospedaje</FormLabel>
        <CheckBox onChange={() => console.log('...')}>Ayuda Basica</CheckBox>
        <CheckBox onChange={() => console.log('...')}>Wifi</CheckBox>
        <CheckBox onChange={() => console.log('...')}>Escritorio</CheckBox>
      </Column>
      <Column className="w-full mb-8">
        <FormLabel>Que espacios pueden utilizar los huespedes?</FormLabel>
        <CheckBox onChange={() => console.log('...')}>Ayuda Basica</CheckBox>
        <CheckBox onChange={() => console.log('...')}>Wifi</CheckBox>
        <CheckBox onChange={() => console.log('...')}>Escritorio</CheckBox>
      </Column>
      <Column className="w-full mb-8">
        <FormLabel>Ayuda alimenticia</FormLabel>
        <CheckBox onChange={() => console.log('...')}>Ayuda Basica</CheckBox>
        <CheckBox onChange={() => console.log('...')}>Wifi</CheckBox>
        <CheckBox onChange={() => console.log('...')}>Escritorio</CheckBox>
      </Column>
    </Row>
  </form>
);
