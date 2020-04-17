import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
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

enum DIRECTION {
  right,
  left,
}

const Steps = ({ active = 1 }) => (
  <div className="flex flex-row mb-8">
    <FormStep isActive={active === 1}>1</FormStep>
    <FormStep isActive={active === 2}>2</FormStep>
    <FormStep isActive={active === 3}>3</FormStep>
  </div>
);

const AddStayPage = () => {
  const [block, setBlock] = useState(1);
  const [buttonLabel, setButtonLabel] = useState(SUBMIT_BUTTON_LABELS.next);
  const [direction, setDirection] = useState(DIRECTION.right);

  const onClickNextButton = () => {
    setDirection(DIRECTION.right);
    if (block < 3) {
      setBlock(block + 1);
    } else if (block === 2) {
      setBlock(block + 1);
      setButtonLabel(SUBMIT_BUTTON_LABELS.submit);
    } else if (block == 3) {
      alert('submit');
    }
  };

  const onClickBackButton = () => {
    setDirection(DIRECTION.left);
    if (block > 1) {
      setBlock(block - 1);
    } else if (block === 3) {
      setBlock(block - 1);
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
              Para registrar tu casa, apartamento, sofacama, etc. Sólo debes tener en cuenta estors tres simples pasos.
            </p>
          </Column>
        </Row>
        <Row className="justify-center">
          <Steps active={block} />
        </Row>
        <ShowFirstBlockIfSelected block={block} direction={direction} />
        <ShowSecondBlockIfSelected block={block} direction={direction} />
        <ShowThirdBlockIfSelected block={block} direction={direction} />
        <FormBottom
          back={{ label: 'Volver', action: onClickBackButton }}
          next={{ label: buttonLabel, action: onClickNextButton }}
        />
      </Container>
    </Layout>
  );
};

const ShowFirstBlockIfSelected = ({ block = 0, direction }) =>
  block === 1 ? (
    <Slide right={DIRECTION.left === direction}>
      <FormFirstPart />{' '}
    </Slide>
  ) : null;
const ShowSecondBlockIfSelected = ({ block = 0, direction }) =>
  block === 2 ? (
    <Slide right={DIRECTION.right === direction} left={DIRECTION.left == direction}>
      <FormSecondPart />{' '}
    </Slide>
  ) : null;
const ShowThirdBlockIfSelected = ({ block = 0, direction }) =>
  block === 3 ? (
    <Slide right={DIRECTION.right === direction}>
      <FormThirdPart />{' '}
    </Slide>
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
