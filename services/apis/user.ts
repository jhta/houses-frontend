import axios, { AxiosRequestConfig } from 'axios';
import { get } from 'lodash';
import qs from 'qs';
import { RequestResponse } from '../interfaces';
import { Endpoint } from '../enums';
// improve axios conf later
import localAxios from '../axios';

enum USER_TYPE {
  basic = 1,
}

export interface IUser {
  name: string;
  email: string;
  userType?: number;
  locationId?: number;
}

export interface IUserPostParams extends IUser {
  password: string;
}

export interface IUserGetParams {
  id: string;
}

export interface IGetUserResponse extends RequestResponse {
  data: IUser | {};
}

export async function getUserById(params: IUserGetParams): Promise<IGetUserResponse> {
  const formattedParams = qs.stringify(params);

  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${Endpoint.places}?${formattedParams}`,
  };

  try {
    const { data } = await localAxios(options);
    console.log(data);
    return { data, error: {} };
  } catch (error) {
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: {} };
  }
}

export async function postUser(params: IUserPostParams) {
  try {
    const options: AxiosRequestConfig = {
      method: 'POST',
      url: Endpoint.users,
      data: params,
    };

    const { data } = await localAxios(options, true);
    return { data, error: {} };
  } catch (error) {
    console.log(error);
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: {} };
  }
}
