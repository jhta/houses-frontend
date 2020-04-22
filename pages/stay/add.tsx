import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Fade from 'react-reveal/Fade';
import { Layout } from '../../components/layout';
import { H1, FormStep } from '../../components/atoms';
import { Container, Column, Row } from '../../components/grid';
import { FormBottom } from '../../components/molecules';
import { FormFirstPart, FormSecondPart, FormThirdPart } from '../../components/organisms/stay/add';
import { postPlace, IPostPlaceResponse, IPostParams } from '../../services/apis/places';
import { getTokenFromRequest } from '../../utils/getCookie';
import { asPage } from '../../utils/asPage';

enum SUBMIT_BUTTON_LABELS {
  'next' = 'Siguiente',
  'submit' = 'Enviar',
}

const initialForm: IPostParams = {
  latitude: 0,
  longitude: 0,
  address: '',
  phone: '',
  description: '......',
  guestsAllowed: 1,
  bathroom: true,
  food: false,
  kitchen: false,
  parking: false,
  availableFrom: '2020-04-18T14:55:11.247Z',
  availableTo: '2020-04-18T14:55:11.247Z',
  active: true,
  internet: true,
  entireHouse: true,
  user: {
    location: {
      id: 1,
    },
  },
  location: {
    id: 1,
  },
};

const Steps = ({ active = 1 }) => (
  <div className="flex flex-row mb-8">
    <FormStep isActive={active === 1}>1</FormStep>
    <FormStep isActive={active === 2}>2</FormStep>
    {/* <FormStep isActive={active === 3}>3</FormStep> */}
  </div>
);

const AddStayPage = () => {
  const [block, setBlock] = useState(1);
  const [buttonLabel, setButtonLabel] = useState(SUBMIT_BUTTON_LABELS.next);
  const [form, setFormInputs] = useState(initialForm);
  const [loading, setLoader] = useState(false);
  const [errors, setErrors] = useState([]);

  const submit = async () => {
    setLoader(true);
    try {
      await postPlace(form);
      setLoader(false);
      Router.push('/');
    } catch (e) {
      setLoader(false);
      setErrors([e.message]);
      console.log(e);
    }
  };

  const onClickNextButton = () => {
    if (block === 1) {
      setBlock(block + 1);
      setButtonLabel(SUBMIT_BUTTON_LABELS.submit);
    } else if (block == 2) {
      submit();
    }
  };

  const onClickBackButton = () => {
    setBlock(block - 1);
    if (block === 2) {
      setButtonLabel(SUBMIT_BUTTON_LABELS.next);
    }
  };

  const isFormIncomplete = form.address.length < 5 && form.phone.length < 6;

  return (
    <Layout>
      <Container className="flex flex-col items-center py-6">
        <Row>
          <Column className="w-full justify-center">
            <H1 className="text-center">Registrar Hospedaje</H1>
          </Column>
        </Row>
        <Row className="justify-center mb-8">
          <Column className="w-full">
            <p className="text-center">
              Para registrar tu casa, apartamento, habitación, sofacama, etc. Solo debes tener en cuenta estos tres
              simples pasos.
            </p>
          </Column>
        </Row>
        <Row className="justify-center">
          <Steps active={block} />
        </Row>
        <ShowFirstBlockIfSelected block={block} setFormInputs={setFormInputs} />
        <ShowSecondBlockIfSelected block={block} setFormInputs={setFormInputs} form={form} />
        <FormBottom
          back={{ label: 'Volver', action: onClickBackButton, show: block !== 1 }}
          next={{
            label: buttonLabel,
            action: onClickNextButton,
            disable: (isFormIncomplete && block === 2) || loading,
          }}
        />
      </Container>
    </Layout>
  );
};

const ShowFirstBlockIfSelected = ({ block = 0, setFormInputs }) =>
  block === 1 ? (
    <Fade>
      <FormFirstPart setFormInputs={setFormInputs} />
    </Fade>
  ) : null;
const ShowSecondBlockIfSelected = ({ block = 0, setFormInputs, form }) =>
  block === 2 ? (
    <Fade>
      <FormSecondPart setFormInputs={setFormInputs} form={form} />
    </Fade>
  ) : null;

export default asPage(AddStayPage);
