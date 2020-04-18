import React, { useState } from 'react';
import { H2, FormLabel, CheckBox } from '../../../atoms';
import { FormRadioBox } from '../../../molecules';
import { FormSelect } from '../../../molecules/stay/add';
import { Column, Row } from '../../../grid';

const FormRadioBoxList = ({ options = [], label = '', id, onChange }) => {
  const [radioOptions, setOptions] = useState(options);

  const onOptionChange = (e) => {
    const eventValue = e.target.value;
    const newOptions = radioOptions.map((op) => ({
      ...op,
      checked: op.value === eventValue,
    }));
    onChange(eventValue);
    setOptions(newOptions);
  };

  return (
    <div>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      {radioOptions.map((option, key) => (
        <FormRadioBox key={key} onChange={onOptionChange} {...option} />
      ))}
    </div>
  );
};

const radioBoxOptions = [
  {
    label: 'Todo el lugar',
    secondaryLabel:
      'Los huéspedes disponen del alojamiento entero para ellos. Esto normalmente incluye una habitación, un baño y una cocina.',
    checked: true,
    value: 'entireHouse',
  },
  {
    label: 'Habitación privada',
    secondaryLabel: 'Los huéspedes disponen de una habitación privada para dormir. Se pueden compartir otras áreas.',
    value: 'privateRoom',
  },
  {
    label: 'Habitación compartida',
    secondaryLabel: 'Los huéspedes duermen en una habitación o área común que podrían compartir con otras personas.',
    value: 'publicRoom',
  },
];

const bedOptions = [
  {
    label: '1 cama',
    value: 1,
  },
  {
    label: '2 camas',
    value: 2,
  },
  {
    label: '3 camas',
    value: 3,
  },
  {
    label: '4 camas',
    value: 4,
  },
];

export const FormFirstPart = ({ setFormInputs }) => {
  const setEntireHouse = (value) => {
    const entireHouse = value === 'entireHouse';
    setFormInputs((inputs) => ({ ...inputs, entireHouse }));
  };

  const setGuestsAllowed = (e) => {
    const { value } = e.target;
    setFormInputs((inputs) => ({ ...inputs, guestsAllowed: value }));
  };

  const createSetCheckbox = (fieldName) => (e) => {
    console.log('event', fieldName, e.target.checked);
    const { checked } = e.target;
    setFormInputs((inputs) => ({ ...inputs, [fieldName]: checked }));
  };

  return (
    <form className="w-full">
      <Row>
        <Column className="w-full text-center mb-6">
          <H2>¿Qué tipo de alojamiento ofreces?</H2>
        </Column>
      </Row>
      <Row className="mb-6">
        <Column className="w-full">
          <FormRadioBoxList
            id="entireHouse"
            options={radioBoxOptions}
            label="Con qué contarán los huéspedes?"
            onChange={setEntireHouse}
          />
        </Column>
      </Row>
      <Row className="flex-wrap mb-6">
        <Column className="w-full md:w-auto md:pr-8">
          <FormSelect
            onChange={setGuestsAllowed}
            options={bedOptions}
            label="¿Cuántas camas pueden utilizar los huéspedes?"
          />
        </Column>
      </Row>
      <Row className="flex-wrap">
        <Column className="w-full mb-8">
          <FormLabel>Ayudas</FormLabel>
          <CheckBox defaultChecked>Ayuda Basica (Toallas, sábanas, jabón, papel higiénico y almohadas)</CheckBox>
          <CheckBox defaultChecked onChange={createSetCheckbox('internet')}>
            Wifi
          </CheckBox>
          <CheckBox onChange={createSetCheckbox('food')}>Ayuda Alimenticia</CheckBox>
        </Column>
        <Column className="w-full mb-8">
          <FormLabel>¿Qué espacios pueden utilizar los huéspedes?</FormLabel>
          <CheckBox onChange={createSetCheckbox('kitchen')}>Cocina</CheckBox>
          <CheckBox onChange={createSetCheckbox('parking')}>Estacionamiento</CheckBox>
          <CheckBox onChange={createSetCheckbox('bathroom')}>Baño</CheckBox>
        </Column>
      </Row>
    </form>
  );
};
