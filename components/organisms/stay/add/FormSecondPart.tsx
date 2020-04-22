import React from 'react';
import { H2 } from '../../../atoms';
import { FormLabel } from '../../../atoms';
import { FormInput } from '../../../molecules';
import { FormSelect, FormMap } from '../../../molecules/stay/add';
import { Column, Row } from '../../../grid';

export const FormSecondPart = ({ setFormInputs, form }) => {
  const setAddress = (e) => {
    const { value } = e.target;
    setFormInputs((inputs) => ({ ...inputs, address: value }));
  };

  const setPosition = (position) => {
    setFormInputs((inputs) => ({ ...inputs, ...position }));
  };

  const setPhone = (e) => {
    const { value } = e.target;
    setFormInputs((inputs) => ({ ...inputs, phone: value }));
  };
  return (
    <form className="flex flex-col items-center">
      <Row className="justify-center">
        <Column className="w-full text-center mb-6">
          <H2>Donde se encuentra tu alojamiento?</H2>
        </Column>
      </Row>
      <Row className="flex-wrap justify-center">
        <Column className="w-full md:w-auto md:pr-8">
          <FormSelect onChange={() => {}} options={[{ label: 'Colombia', value: 'Colombia' }]} label="Pais" />
        </Column>
        <Column className="w-full md:w-auto md:pr-8">
          <FormSelect onChange={() => {}} options={[{ label: 'Bogota', value: 1 }]} label="Ciudad" />
        </Column>
      </Row>
      <Row className="flex-wrap justify-center">
        <Column className="md:pr-8">
          <FormInput className="w-64" label="Telefono" name="phone" type="number" onChange={setPhone} />
        </Column>
        <Column className="md:w-auto md:pr-8">
          <FormInput
            className="w-64 mb-6"
            name="address"
            label="Dirección"
            value={form.address}
            onChange={setAddress}
          />
        </Column>
      </Row>
      <Row className="mb-8 justify-center">
        <Column className="w-full ">
          <FormLabel>¿Está el marcador en el lugar correcto?</FormLabel>
          <p>
            Si es necesario, puedes ajustar el mapa para que el marcador esté en la ubicación correcta. Solo los
            huéspedes confirmados podrán tener acceso a ella para saber cómo llegar a tu alojamiento.
          </p>
        </Column>
      </Row>
      <FormMap setPosition={setPosition} />
    </form>
  );
};
