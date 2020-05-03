import axios, { AxiosRequestConfig } from 'axios';
import { get } from 'lodash';
import qs from 'qs';
import cookies from 'js-cookie';
import { API_URL } from '../constants';
import { RequestResponse } from '../interfaces';
import { Endpoint } from '../enums';
import { getCurrentSession, ICurrentSession } from './current';

// const isBrowser = typeof window !== 'undefined';

const ENCODED_FORM_HEADERS = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

interface LoginParams {
  readonly password: string;
  readonly username: string;
}

interface LoginResponse extends RequestResponse {
  data: {
    ok: boolean;
  };
}

export async function login(params: LoginParams): Promise<LoginResponse> {
  const formattedParams = qs.stringify({ ...params, grant_type: 'password' });

  const options: AxiosRequestConfig = {
    method: 'POST',
    headers: ENCODED_FORM_HEADERS,
    data: formattedParams,
    url: Endpoint.Login,
    baseURL: API_URL,
  };

  try {
    const { data } = await axios(options);
    const { access_token: token, expires_in: expires } = data;
    cookies.set('token', token, { expires });

    await getCurrentSession(token);

    return { data: { ok: true }, error: {} };
  } catch (error) {
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: { ok: false } };
  }
}
