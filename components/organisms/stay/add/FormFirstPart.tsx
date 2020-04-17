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
      'los huespedes disponen de alojamiento entero para ellos. Esto normalmente incluye una habitacion, un baño y una cocina',
  },
  {
    label: 'Todo el lugar',
    secondaryLabel:
      'los huespedes disponen de alojamiento entero para ellos. Esto normalmente incluye una habitacion, un baño y una cocina',
  },
  {
    label: 'Todo el lugar',
    secondaryLabel:
      'los huespedes disponen de alojamiento entero para ellos. Esto normalmente incluye una habitacion, un baño y una cocina',
  },
];

const radioBoxOptionsSpace = [
  {
    label: 'Sí, esta pensado principalmente para los huespedes',
  },
  {
    label: 'No, dejo mis pertenencias aqui',
  },
];

export const FormFirstPart = () => (
  <form className="w-full">
    <Row>
      <Column className="w-full text-center mb-6">
        <H2>Qué tipo de alojamiento ofreces?</H2>
      </Column>
    </Row>
    <Row className="flex-wrap ">
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect
          options={['apartamento', 'casa', 'habitacion', 'sofa cama']}
          label="Para empezar, vamos a  simplificar"
        />
      </Column>
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect
          options={['apartamento', 'casa', 'habitacion', 'sofa cama']}
          label="Ahora elige un tipo de propiedad"
        />
      </Column>
    </Row>
    <Row className="mb-6">
      <Column className="w-full">
        <FormRadioBoxList options={radioBoxOptions} label="Con qué contarán los huéspedes?" />
      </Column>
    </Row>
    <Row>
      <Column className="w-full">
        <FormRadioBoxList options={radioBoxOptionsSpace} label="es un espacio exclusivo para los huespedes?" />
      </Column>
    </Row>
    <Row className="flex-wrap mb-6">
      <Column className="w-full md:w-auto md:pr-8">
        <FormSelect
          options={['1 cama', '2 camas', '3 camas', '4 camas']}
          label="Cuantas camas pueden utiliar los huespedes?"
        />
      </Column>
    </Row>
  </form>
);
