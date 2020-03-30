import React, { useState } from 'react';
import { FormHeader } from '../../components/organisms/FormHeader';
import { LodgingForm } from '../../components/organisms/LodgingForm';
import { LoginForm } from '../../components/organisms/LoginForm';

const BackButton = (props) => {
  const { href, children, className } = props;
  return (
    <div className="p-10">
      <a className={`text-gray-2 text-xs cursor-pointer ${className}`} href={href}>
        <div className="flex items-center">
          <h1 className="text-secondary text-xl font-bold">
            <label className="text-xl">{'<'}</label> {children}
          </h1>
        </div>
      </a>
    </div>
  );
};

const FormPage = () => {
  const [isCurrentForm, setIsCurrentForm] = useState(true);
  return (
    <div className="py-4 bg-third">
      <BackButton href="/">Volver</BackButton>
      <FormHeader
        centerTitle="Hospedaje"
        rightTitle="Inicia Sesión"
        leftTitle="Registro"
        srcImg="/images/icon.svg"
        isCurrentForm={isCurrentForm}
        setIsCurrentForm={setIsCurrentForm}
      />
      {isCurrentForm ? <LodgingForm /> : <LoginForm />}
    </div>
  );
};

export default FormPage;
