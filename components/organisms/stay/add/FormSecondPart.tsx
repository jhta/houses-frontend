import React from 'react';
import { H2 } from '../../../atoms';
import { FormLabel } from '../../../atoms';
import { FormInput } from '../../../molecules';
import { FormSelect, FormMap } from '../../../molecules/stay/add';
import { Column, Row } from '../../../grid';

export const FormSecondPart = () => (
  <form className="flex flex-col items-center">
    <Row className="justify-center">
      <Column className="w-full text-center mb-6">
        <H2>Donde se encuentra tu alojamiento?</H2>
      </Column>
    </Row>
    {/* <Row className="flex-wrap justify-center">
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect options={['Colombia']} label="Pais" />
      </Column>
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect options={['Cundinamarca']} label="Departamento" />
      </Column>
    </Row>
    <Row className="flex-wrap justify-center">
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect options={['Bogota']} label="Ciudad" />
      </Column>
      <Column className="w-full md:w-auto md:pr-8">
        <FormInput className="w-64 mb-6" name="address" label="Dirección" value="" />
      </Column>
    </Row> */}
    <Row className="mb-8 justify-center">
      <Column className="w-full md:w-1/2">
        <FormLabel>¿Está el marcador en el lugar correcto?</FormLabel>
        <p>
          Si es necesario, puedes ajustar el mapa para que el marcador esté en la ubicación correcta. Solo los huéspedes
          confirmados podrán tener acceso a ella para saber cómo llegar a tu alojamiento.
        </p>
      </Column>
    </Row>
    <FormMap />
  </form>
);
