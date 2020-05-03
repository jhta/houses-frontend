import axios, { AxiosRequestConfig } from 'axios';
import { get } from 'lodash';
import cookies from 'js-cookie';
import { API_URL } from '../constants';
import { RequestResponse } from '../interfaces';
import { Endpoint } from '../enums';

// const isBrowser = typeof window !== 'undefined';

export interface ICurrentSession extends RequestResponse {
  data:
    | {}
    | {
        id: number;
        name: string;
        email: string;
        userType: number;
        jobPlace: string | null;
        jobAddress: string | null;
        phoneNumber: string | null;
        location: {
          id: number;
        };
      };
}

export async function getCurrentSession(authorization: string): Promise<ICurrentSession> {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: Endpoint.current,
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${authorization}` },
  };

  try {
    const { data } = await axios(options);
    const { id, name, email } = data;
    cookies.set('user_id', id);
    cookies.set('user_name', name);
    cookies.set('user_email', email);
    return { data, error: {} };
  } catch (error) {
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: {} };
  }
}
