import React from 'react';
import { H2, FormLabel } from '../../../atoms';
import { FormRadioBox } from '../../../molecules';
import { FormSelect } from '../../../molecules/stay/add';
import { Column, Row } from '../../../grid';

const FormRadioBoxList = ({ options = [], label = '' }) => (
  <div>
    <FormLabel>{label}</FormLabel>
    {options.map((option, key) => (
      <FormRadioBox key={key} {...option} />
    ))}
  </div>
);

const radioBoxOptions = [
  {
    label: 'Todo el lugar',
    secondaryLabel:
      'Los huéspedes disponen del alojamiento entero para ellos. Esto normalmente incluye una habitación, un baño y una cocina.',
  },
  {
    label: 'Habitación privada',
    secondaryLabel: 'Los huéspedes disponen de una habitación privada para dormir. Se pueden compartir otras áreas.',
  },
  {
    label: 'Habitación compartida',
    secondaryLabel: 'Los huéspedes duermen en una habitación o área común que podrían compartir con otras personas.',
  },
];

const radioBoxOptionsSpace = [
  {
    label: 'Sí, está pensado principalmente para los huéspedes',
  },
  {
    label: 'No, dejo mis pertenencias aquí',
  },
];

export const FormFirstPart = () => (
  <form className="w-full">
    <Row>
      <Column className="w-full text-center mb-6">
        <H2>¿Qué tipo de alojamiento ofreces?</H2>
      </Column>
    </Row>
    <Row className="flex-wrap ">
      {/* <Column className="w-full md:w-auto md:pr-8">
        <FormSelect
          options={['apartamento', 'casa', 'habitacion', 'sofa cama']}
          label="Para empezar, vamos a  simplificar"
        />
      </Column> */}
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect options={['apartamento', 'casa', 'habitacion', 'sofa cama']} label="Tipo de propiedad" />
      </Column>
    </Row>
    <Row className="mb-6">
      <Column className="w-full">
        <FormRadioBoxList options={radioBoxOptions} label="Con qué contarán los huéspedes?" />
      </Column>
    </Row>
    <Row>
      <Column className="w-full">
        <FormRadioBoxList options={radioBoxOptionsSpace} label="¿Es un espacio exclusivo para los huéspedes?" />
      </Column>
    </Row>
    <Row className="flex-wrap mb-6">
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect
          options={['1 cama', '2 camas', '3 camas', '4 camas']}
          label="¿Cuántas camas pueden utilizar los huéspedes?"
        />
      </Column>
    </Row>
  </form>
);
