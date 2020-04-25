import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { FormHeader, LoginForm } from '../../components/organisms';
import { BackButton } from '../../components/atoms';

const FormPage = () => {
  return (
    <div className="py-4 session-gradient">
      <BackButton href="/">Volver</BackButton>
      <FormHeader
        centerTitle="Hospedaje"
        rightTitle="Inicia Sesión"
        leftTitle="Registro"
        srcImg="/images/icon.svg"
        currentForm="login"
      />
      <Fade>
        <LoginForm />
      </Fade>
    </div>
  );
};

export default FormPage;
