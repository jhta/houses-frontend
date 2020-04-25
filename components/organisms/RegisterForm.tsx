import React, { useState } from 'react';
import classnames from 'classnames';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormDropdown, FormInput } from '../molecules';
import { postUser } from '../../services/apis/user';
import { login } from '../../services/oauth';

const { string, object } = yup;

export const RegisterForm = (props) => {
  const { isCurrentForm, setIsCurrentForm } = props;

  const validationSchema = object().shape({
    name: string().required('* El nombre es requerido'),
    email: string().email('correo inválido').required('* El correo es requerido'),
    password: string().min(6, 'La contraseña debe tener mínimo 6 caracteres').required('* La contraseña es requerida'),
    confPassword: string()
      .required('* Requerido')
      .oneOf([yup.ref('password'), null], 'La contraseña y la confirmación de contraseña deben ser iguales'),
    pais: string().required('* El pais es requerido'),
    ciudad: string().required('* La ciudad es requerida'),
  });

  const FormButton = (props) => {
    const { children, disable } = props;
    return (
      <label className="block">
        <button
          disabled={disable}
          className={classnames(
            'form-input bg-primary mt-4 block text-white font-bold text-base w-full rounded',
            { 'bg-primary text-white': !disable },
            { 'bg-gray-6 text-bg-gray-5': disable }
          )}
          type="submit"
        >
          {children}
        </button>
      </label>
    );
  };

  const [isLoading, setLoader] = useState(false);
  const handleClick = (values) => {
    console.log('values ', values);
  };

  const submitUser = async (params) => {
    setLoader(true);
    try {
      const {
        data: { id },
      } = await postUser(params);
      console.log('userId', id);

      const { data, error } = await login({ username: params.email, password: params.password });
      setLoader(false);
      if (data.ok) window.location.href = '/';
    } catch (errors) {
      setLoader(false);
      console.log('errors', errors);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        pais: 'colombia',
        ciudad: 'bogota',
        password: '',
        confPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        handleClick(values);
        const { name, email, password } = values;
        await submitUser({ name, email, password, locationId: 1, userType: 1 });
      }}
    >
      {({ values, errors, handleSubmit, setValues, handleChange, handleBlur, setTouched, touched }) => (
        <form onSubmit={handleSubmit} noValidate className="h-screen" autoComplete="off">
          <div className="p-10 flex-grow md:w-3/5 lg:w-3/5 xl:w-2/5 mx-auto">
            <FormInput label="Nombre" name="name" value={values.name} onChange={handleChange} />

            <FormInput label="Correo" name="email" type="email" value={values.email} onChange={handleChange} />
            <FormInput
              label="Contraseña"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            <FormInput
              label="Confirmar contraseña"
              name="confPassword"
              type="password"
              value={values.confPassword}
              onChange={handleChange}
            />
            <FormDropdown
              label="Seleccione"
              labeltag="Pais"
              name="pais"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.pais}
            >
              {[
                { value: 'Colombia', id: 'colombia' },
                // { value: 'Ecuador', id: 'ecuador' },
                // { value: 'Peru', id: 'peru' },
                // { value: 'Venezuela', id: 'venezuela' },
              ]}
            </FormDropdown>
            <FormDropdown
              labeltag="Ciudad"
              label="Seleccione"
              name="ciudad"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ciudad}
            >
              {[
                { value: 'Bogota', id: 'bogota' },
                // { value: 'Cali', id: 'cali' },
                // { value: 'Barranquilla', id: 'barranquilla' },
                // { value: 'Medellin', id: 'medellin' },
              ]}
            </FormDropdown>
            <FormButton>Registrarme ></FormButton>
          </div>
        </form>
      )}
    </Formik>
  );
};
