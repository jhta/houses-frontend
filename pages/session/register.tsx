import React from 'react';
import Fade from 'react-reveal/Fade';
import { FormHeader, RegisterForm } from '../../components/organisms';
import { BackButton } from '../../components/atoms';

const FormPage = () => {
  return (
    <div className="py-4 bg-third">
      <BackButton href="/">Volver</BackButton>
      <FormHeader
        centerTitle="Hospedaje"
        rightTitle="Inicia Sesión"
        leftTitle="Registro"
        srcImg="/images/icon.svg"
        currentForm="register"
      />
      <Fade>
        <RegisterForm />
      </Fade>
    </div>
  );
};

export default FormPage;
