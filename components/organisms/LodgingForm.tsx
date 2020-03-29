import React, { useState } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';
import { FormDropdown, FormInput } from '../../components/molecules';

export const LodgingForm = (props) => {
  const { isCurrentForm, setIsCurrentForm } = props;

  const validationSchema = object().shape({
    nombre: string().required('* El nombre es requerido'),
    correo: string().email('correo inválido').required('* El correo es requerido'),
    contrasena: string().required('* La contraseña es requerida'),
    pais: string().required('* El pais es requerido'),
    ciudad: string().required('* La ciudad es requerida'),
  });

  const FormButton = (props) => {
    const { children } = props;
    return (
      <label className="block">
        <button
          className="form-input bg-primary mt-4 block text-white font-bold text-base w-full rounded"
          type="submit"
        >
          {children}
        </button>
      </label>
    );
  };

  const handleClick = (values) => {
    console.log('values ', values);
  };

  return (
    <Formik
      initialValues={{
        nombre: '',
        correo: '',
        pais: '',
        ciudad: '',
        contrasena: '',
        confContrasena: '',
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
            <FormInput label="Nombre" name="nombre" value={values.nombre} onChange={handleChange} />

            <FormInput label="Correo" name="correo" type="email" value={values.correo} onChange={handleChange} />
            <FormInput
              label="Contraseña"
              name="contrasena"
              type="password"
              value={values.contrasena}
              onChange={handleChange}
            />
            <FormInput
              label="Confirmar contraseña"
              name="confContrasena"
              type="password"
              value={values.confContrasena}
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
                { value: 'Ecuador', id: 'ecuador' },
                { value: 'Peru', id: 'peru' },
                { value: 'Venezuela', id: 'venezuela' },
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
                { value: 'Cali', id: 'cali' },
                { value: 'Barranquilla', id: 'barranquilla' },
                { value: 'Medellin', id: 'medellin' },
              ]}
            </FormDropdown>
            <FormButton>Registrarme ></FormButton>
          </div>
        </form>
      )}
    </Formik>
  );
};
