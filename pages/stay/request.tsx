import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/layout';
import { isEmpty } from 'lodash';
import cookies from 'js-cookie';
import { getPlaceById, IGetPlaceResponse } from '../../services/apis/places';
import { getTokenFromRequest } from '../../utils/getCookie';
import { RequestForm } from '../../components/organisms/RequestForm';

const hospedajeInfo = cookies.get('hospedaje');

const RequestStayPage = () => {
  const [hospedaje, setHospedaje] = useState(hospedajeInfo);
  console.log('hospedaje ', hospedaje);

  useEffect(() => {
    setHospedaje(JSON.parse(cookies.get('hospedaje')));
  }, []);

  return (
    <Layout>
      {/* {JSON.stringify(place)} */}
      <div className="flex-grow my-10">
        <h1 className="text-titleColor text-center text-4xl font-bold">Solicitud de Hospedaje</h1>
        <div className="lg:w-1/3 lg:w-3/5 mx-auto flex justify-center">
          <div className="max-w-sm w-full lg:max-w-full shadow-lg p-4">
            <div className="mx-auto lg:flex ">
              <div className="">
                <img
                  src="https://image.shutterstock.com/z/stock-photo-beautiful-exterior-of-newly-built-luxury-home-yard-with-green-grass-and-walkway-lead-to-ornately-529108441.jpg"
                  alt="image"
                  style={{ width: '22rem' }}
                />
              </div>
              <div className="text-left lg:mx-4">
                <p className="text-lg font-bold">{hospedaje?.address}</p>
                <p className="text-primary">Hospedaje en: </p>
                <p className="text-sm">{hospedaje?.description}</p>
                <p className="text-sm">Hospedaje para {`${hospedaje?.guestsAllowed}`}</p>
                <p className="text-sm">Toallas, sábanas, jabón, papel higienico y almohadas</p>
              </div>
              <div className="flex-col lg:max-w-full text-left">
                <div>
                  <p className="text-titleColor">Con acceso a </p>
                  {hospedaje?.kitchen && <p className="text-sm">Cocina</p>}
                  {hospedaje?.parking && <p className="text-sm">Estacionamiento</p>}
                  {hospedaje?.internet && <p className="text-sm">Intenet</p>}
                  {hospedaje?.bathroom && <p className="text-sm">Ducha</p>}
                </div>
                <div className="my-4">
                  <p className="text-titleColor">Anfitrion </p>
                  {/* Usuario viene null */}
                  <p className="text-sm">Pedro Perez</p>
                </div>
              </div>
            </div>
            <div className="flex-grow lg:relative">
              {hospedaje?.phone && (
                <a
                  className="lg:absolute lg:bottom-0 lg:right-0 border-solid border border-green text-green rounded p-2"
                  href={`https://api.whatsapp.com/send?phone=${hospedaje?.phone}`}
                  target="_blank"
                >
                  (@) Enviar mensaje
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-titleColor text-center text-xl">
            Para completar la solicitud regalanos los siguientes datos
          </p>
          <RequestForm></RequestForm>
        </div>
      </div>
    </Layout>
  );
};

RequestStayPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  let place = {};
  try {
    // TODO: improve auth token config and add it to a global decorator
    let authorization = '';
    if (typeof req !== 'undefined') {
      authorization = getTokenFromRequest(req);
    }
    const { data, error }: IGetPlaceResponse = await getPlaceById({ id: 12 }, authorization);
    place = data;
    if (!isEmpty(error)) {
      // TODO: handle errors
      console.log('error', error);
    }
  } catch (error) {
    // TODO: handle errors
    console.log(error);
  }
  return { userAgent, place };
};

export default RequestStayPage;
