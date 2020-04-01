import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { getPlaceById, IGetPlaceResponse } from '../../services/apis/places';
import { getTokenFromRequest } from '../../utils/getCookie';

const RequestStayPage = ({ place }) => {
  console.log('place', place);
  return <h1>Request stay page {JSON.stringify(place)}</h1>;
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
