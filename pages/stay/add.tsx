import React from 'react';
import classnames from 'classnames';
import { Layout } from '../../components/layout';
import { H1, H2, Select, RadioBox } from '../../components/atoms';
import { Container, Column, Row } from '../../components/grid';

// const AddStayTitle = () => ()

const Step = ({ children, isActive = false }) => (
  <div
    className={classnames(
      'py-1 px-12 rounded-full mr-6 text-2xl',
      { 'bg-primary text-white': isActive },
      { 'bg-gray-6 text-gray-2': !isActive }
    )}
  >
    {children}
  </div>
);

const Steps = ({ active = 1 }) => (
  <div className="flex flex-row mb-8">
    <Step isActive={active === 1}>1</Step>
    <Step isActive={active === 2}>2</Step>
    <Step isActive={active === 3}>3</Step>
  </div>
);

const FormLabel = ({ children, ...rest }) => (
  <label className="text-base text-titleColor leading-normal mb-2" {...rest}>
    {children}
  </label>
);

const FormSelect = ({ options = [], label = '' }) => (
  <div className="flex flex-col mb-6">
    <FormLabel>{label}</FormLabel>
    <Select options={options} />
  </div>
);

const FormRadioBox = ({ label = '', secondaryLabel = '', checked = false }) => (
  <div className="my-3">
    <RadioBox checked={checked} label={label} />
    <p>{secondaryLabel}</p>
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

const FormRadioBoxList = ({ options = [], label = '' }) => (
  <div>
    <FormLabel>{label}</FormLabel>
    {options.map((option, key) => (
      <FormRadioBox key={key} {...option} />
    ))}
  </div>
);

const AddStayForm = () => (
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

const AddStayWrapper = () => (
  <Container className="flex flex-col items-center py-6">
    <Row>
      <Column className="w-full justify-center">
        <H1 className="text-center">Registrar Hospedaje</H1>
      </Column>
    </Row>
    <Row className="justify-center mb-8">
      <Column className="w-full">
        <p className="text-center">
          Para registrar tu casa, apartamento, sofacama, etc. Sólo debes tener en cuenta estors tres simples pasos.
        </p>
      </Column>
    </Row>
    <Row className="justify-center">
      <Steps />
    </Row>
    <AddStayForm />
  </Container>
);

const AddStay = () => (
  <Layout>
    <AddStayWrapper />
  </Layout>
);

export default AddStay;
