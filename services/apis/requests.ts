import axios, { AxiosRequestConfig } from 'axios';
import { get } from 'lodash';
import qs from 'qs';
import { API_URL } from '../constants';
import { RequestResponse } from '../interfaces';
import { Endpoint } from '../enums';
// improve axios conf later
import localAxios from '../axios';
import cookies from 'js-cookie';

export interface IOwnerRequestParams {
  UserId: number;
}

export interface IRequest {
  placeId: number;
  description: string;
  guestTypeId?: number;
  startDate: string;
  endDate: string;
}

export interface IGetOwnerRequestResponse extends RequestResponse {
  data: {
    requests?: IRequest[];
  };
}

export async function getOwnerRequests(
  params: IOwnerRequestParams,
  authorization: string
): Promise<IGetOwnerRequestResponse> {
  const formattedParams = qs.stringify(params);

  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${Endpoint.ownerRequests}?${formattedParams}`,
    headers: { Authorization: `Bearer ${authorization}` },
  };

  try {
    const { data } = await localAxios(options, true);
    // console.log(data);
    const { results: requests } = data;
    return { data: { requests }, error: {} };
  } catch (error) {
    console.log('service error', error);
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: { requests: [] } };
  }
}

export async function getAllRequests(
  params: IOwnerRequestParams,
  authorization: string
): Promise<IGetOwnerRequestResponse> {
  const formattedParams = qs.stringify(params);

  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${Endpoint.allRequests}?${formattedParams}`,
    headers: { Authorization: `Bearer ${authorization}` },
  };

  try {
    const { data } = await localAxios(options, true);
    // console.log(data);
    const { results: requests } = data;
    return { data: { requests }, error: {} };
  } catch (error) {
    console.log('error', error);
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: { requests: [] } };
  }
}
