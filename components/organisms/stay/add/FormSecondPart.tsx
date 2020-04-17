import React from 'react';
import { H2 } from '../../../atoms';
import { FormInput } from '../../../molecules';
import { FormSelect, FormMap } from '../../../molecules/stay/add';
import { Column, Row } from '../../../grid';

export const FormSecondPart = () => (
  <form>
    <Row>
      <Column className="w-full text-center mb-6">
        <H2>Donde se encuentra tu alojamiento?</H2>
      </Column>
    </Row>
    <Row className="flex-wrap ">
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect options={['Colombia']} label="Pais" />
      </Column>
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect options={['Cundinamarca']} label="Departamento" />
      </Column>
    </Row>
    <Row className="flex-wrap ">
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect options={['Bogota']} label="Ciudad" />
      </Column>
      <Column className="w-full md:w-auto md:pr-8">
        <FormInput className="w-64 mb-6" name="address" label="Direccion" value="" />
      </Column>
    </Row>
    <FormMap />
  </form>
);
