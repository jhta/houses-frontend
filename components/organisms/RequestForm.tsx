import React, { useState } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';
import { FormDropdown, FormInput, FormTextArea } from '../molecules';
import { ToggleSwitch, CheckBox } from '../atoms';

export const RequestForm = (props) => {
  const [isSinglePerson, setIsSinglePerson] = useState(false);

  const validationSchema = object().shape({
    nombre: string().required('* El nombre es requerido'),
    correo: string().email('correo inválido').required('* El correo es requerido'),
    telefono: string().required('* El telefono es requerida'),
    centroMedico: string().required('* El Centro Medico es requerido'),
    descripcionAyuda: string().required('* La descripcion es requerida'),
  });

  const FormButton = (props) => {
    const { children } = props;
    return (
      <label className="block">
        <button className="form-input bg-primary mt-1 block text-white font-bold text-base w-32 rounded" type="submit">
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
        telefono: '',
        centroMedico: '',
        descripcionAyuda: '',
        personas: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        handleClick(values);
      }}
    >
      {({ values, errors, handleSubmit, setValues, handleChange, handleBlur, setTouched, touched }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div className="pt-8 lg:w-2/5 mx-auto">
            <div className="lg:flex justify-center">
              <FormInput
                className="lg:w-3/5 px-1"
                label="Nombre"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
              />
              <FormInput
                className="lg:w-3/5 px-1"
                label="Correo"
                name="correo"
                value={values.correo}
                onChange={handleChange}
              />
            </div>
            <div className="lg:flex justify-center pt-4">
              <FormInput
                className="lg:w-3/5 px-1"
                label="Telefono"
                name="telefono"
                value={values.telefono}
                onChange={handleChange}
              />
              <FormDropdown
                className="lg:w-3/5 px-1"
                label="Seleccione"
                labeltag="Donde trabajas?"
                name="centroMedico"
                value={values.centroMedico}
                onChange={handleChange}
              >
                {[
                  { value: 'Clinica Palermo', id: 'clinicaPalermo' },
                  { value: 'Hospital kennedy', id: 'hospitalKennedy' },
                  { value: 'Clinica Country', id: 'clinicaCountry' },
                  { value: 'Cruz Roja', id: 'cruzRoja' },
                ]}
              </FormDropdown>
            </div>
            <div className="pt-4">
              <FormTextArea
                className="px-2"
                label="Por que solicito esta ayuda?"
                name="descripcionAyuda"
                value={values.descripcionAyuda}
                onChange={handleChange}
              />
            </div>
            <div className="lg:flex pt-4 px-1">
              <ToggleSwitch className="py-2">Soy viajer@ en cuarentena</ToggleSwitch>
              <ToggleSwitch className="py-2">Soy medic@s/enfermer@s</ToggleSwitch>
            </div>
            <div className="pt-4 px-2">
              <CheckBox onChange={() => setIsSinglePerson(!isSinglePerson)}>Mas de una persona?</CheckBox>
              {isSinglePerson && (
                <FormDropdown
                  className="lg:w-3/5 mt-2"
                  label="Seleccione"
                  name="personas"
                  value={values.personas}
                  onChange={handleChange}
                >
                  {[
                    { value: '2 personas', id: '2' },
                    { value: '3 personas', id: '3' },
                    { value: '4 personas', id: '4' },
                    { value: '5 personas', id: '5' },
                  ]}
                </FormDropdown>
              )}
            </div>
            <hr className="mt-6 mb-2 border-gray-3" />
            <div className="lg:flex lg:justify-between px-2">
              <a className="text-primary text-lg cursor-pointer" href="/map/mapPage">
                <div className="py-4 lg:flex lg:justify-center items-center text-center">
                  {'<'} Volver a la busqueda
                </div>
              </a>
              <FormButton>Enviar ></FormButton>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
