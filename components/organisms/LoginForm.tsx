import React, { useState } from 'react';
import Router from 'next/router';
import { Formik } from 'formik';
import classnames from 'classnames';
import { string, object } from 'yup';

import { FormInput } from '../molecules';
import { Alert } from '../atoms';
import { login } from '../../services/oauth';

const FormButton = (props) => {
  const { children, disable } = props;
  return (
    <label className="block">
      <button
        disabled={disable}
        className={classnames(
          'form-input mt-4 block font-bold text-base w-full rounded',
          { 'bg-gray-5 text-textColor cursor-not-allowed': disable },
          { 'bg-primary text-white': !disable }
        )}
        type="submit"
      >
        {children}
      </button>
    </label>
  );
};

export const LoginForm = (props) => {
  const validationSchema = object().shape({
    email: string().email('correo inválido').required('* El correo es requerido'),
    password: string().required('* La contraseña es requerida'),
  });

  const [isLoading, setLoader] = useState(false);
  const [errors, setErrors] = useState([]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async ({ email: username, password }, { setSubmitting }) => {
        setSubmitting(true);
        setLoader(true);
        setErrors([]);
        try {
          setLoader(false);
          const { data, error } = await login({ username, password });
          if (data.ok) Router.push('/');

          if (error) setErrors([error]);
        } catch (error) {
          setLoader(false);
          setErrors([error.message]);
          console.log(error);
        }
      }}
    >
      {({ values, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit} noValidate className="h-screen" autoComplete="off">
          <div className="p-10 flex-grow md:w-3/5 lg:w-3/5 xl:w-2/5 mx-auto">
            <FormInput label="Correo" name="email" type="email" value={values.email} onChange={handleChange} />
            <FormInput
              label="Contraseña"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            <FormButton disable={isLoading}>Entrar ></FormButton>
            {errors.length ? <Alert message={errors.join('\n')} /> : null}
          </div>
        </form>
      )}
    </Formik>
  );
};
