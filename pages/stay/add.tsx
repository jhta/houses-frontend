import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Layout } from '../../components/layout';
import { H1, FormStep } from '../../components/atoms';
import { Container, Column, Row } from '../../components/grid';
import { FormBottom } from '../../components/molecules';
import { FormFirstPart, FormSecondPart, FormThirdPart } from '../../components/organisms/stay/add';
import { getPlaceById, IGetPlaceResponse } from '../../services/apis/places';
import { getTokenFromRequest } from '../../utils/getCookie';

enum SUBMIT_BUTTON_LABELS {
  'next' = 'Siguiente',
  'submit' = 'Enviar',
}

const initialForm = {
  latitude: 0,
  longitude: 0,
  address: '',
  phone: '',
  description: '',
  guestsAllowed: 1,
  bathroom: true,
  food: false,
  kitchen: false,
  parking: false,
  availableFrom: '2020-04-18T14:55:11.247Z',
  availableTo: '2020-04-18T14:55:11.247Z',
  active: true,
  creationDate: '2020-04-18T14:55:11.247Z',
  internet: true,
  entireHouse: true,
  user: {
    location: {
      id: 0,
    },
  },
  location: {
    id: 0,
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

  const onClickNextButton = () => {
    if (block === 1) {
      setBlock(block + 1);
      setButtonLabel(SUBMIT_BUTTON_LABELS.submit);
    } else if (block == 2) {
      alert('submit');
    }
  };

  const onClickBackButton = () => {
    setBlock(block - 1);
    if (block === 2) {
      setButtonLabel(SUBMIT_BUTTON_LABELS.next);
    }
  };

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
        <ShowSecondBlockIfSelected block={block} />
        <FormBottom
          back={{ label: 'Volver', action: onClickBackButton, show: block !== 1 }}
          next={{ label: buttonLabel, action: onClickNextButton }}
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
const ShowSecondBlockIfSelected = ({ block = 0 }) =>
  block === 2 ? (
    <Fade>
      <FormSecondPart />{' '}
    </Fade>
  ) : null;

AddStayPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  // TODO: improve auth token config and add it to a global decorator
  let authorization = '';
  if (typeof req !== 'undefined') {
    authorization = getTokenFromRequest(req);
  }

  return {};
};

export default AddStayPage;
