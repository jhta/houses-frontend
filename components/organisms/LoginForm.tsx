import React, { useState } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';
import { FormInput } from '../molecules/FormInput';

const FormButton = (props) => {
  const { children } = props;
  return (
    <label className="block">
      <button className="form-input bg-primary mt-4 block text-white font-bold text-base w-full rounded" type="submit">
        {children}
      </button>
    </label>
  );
};

export const LoginForm = (props) => {
  const validationSchema = object().shape({
    correo: string().email('correo inválido').required('* El correo es requerido'),
    contrasena: string().required('* La contraseña es requerida'),
  });

  const handleClick = (values) => {
    console.log('values ', values);
  };

  return (
    <Formik
      initialValues={{
        correo: '',
        contrasena: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        handleClick(values);
      }}
    >
      {({ values, errors, handleSubmit, setValues, handleChange, handleBlur, setTouched, touched }) => (
        <form onSubmit={handleSubmit} noValidate className="bg-third h-screen" autoComplete="off">
          <div className="p-10 flex-grow md:w-3/5 lg:w-3/5 xl:w-2/5 mx-auto">
            <FormInput label="Correo" name="correo" type="email" value={values.correo} onChange={handleChange} />
            <FormInput
              label="Contraseña"
              name="contrasena"
              type="password"
              value={values.contrasena}
              onChange={handleChange}
            />
            <FormButton>Entrar ></FormButton>
          </div>
        </form>
      )}
    </Formik>
  );
};
