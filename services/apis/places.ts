import axios, { AxiosRequestConfig } from 'axios';
import { get } from 'lodash';
import qs from 'qs';
import { API_URL } from '../constants';
import { RequestResponse } from '../interfaces';
import { Endpoint } from '../enums';
// improve axios conf later
import localAxios from '../axios';
import cookies from 'js-cookie';

export interface PlacesParams {
  LocationId: number;
  OrderBy?: string;
  Page?: number;
  PageSize?: number;
  MaxPageSize?: number;
  CountGuess?: number;
}
export interface IPlace {
  id?: number;
  latitude: number;
  longitude: number;
  address?: string;
  phone: string;
  description?: string;
  kitchen?: boolean;
  guestsAllowed: number;
  food?: boolean;
  parking?: boolean;
  bathroom?: boolean;
  availableFrom?: string;
  availableTo?: string;
  internet?: boolean;
  active?: boolean;
  entireHouse?: boolean;
}

export interface IPlacesResponse extends RequestResponse {
  data: {
    places: IPlace[];
  };
}

// TODO: Improve the authorization config
export async function getPlaces(params: PlacesParams, navigation): Promise<IPlacesResponse> {
  const formattedParams = qs.stringify(params);

  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${Endpoint.places}?${formattedParams}`,
    headers: { Authorization: `Bearer ${navigation}` },
  };

  try {
    const { data } = await localAxios(options);
    // console.log(data);
    const { results: places } = data;
    return { data: { places }, error: {} };
  } catch (error) {
    console.log('error', error);
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: { places: [] } };
  }
}

export interface IPostParams extends IPlace {
  location: {
    id: number;
  };
  user: {
    location: {
      id: number;
    };
  };
}

export interface IPostPlaceResponse extends RequestResponse {
  data: {
    id: number;
  };
}

export async function postPlace(params: IPostParams): Promise<IPostPlaceResponse> {
  const options: AxiosRequestConfig = {
    method: 'POST',
    url: `${Endpoint.places}`,
    data: params,
  };

  try {
    const { data } = await localAxios(options);
    const { id } = data;
    return { data: { id }, error: {} };
  } catch (error) {
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: { id: -1 } };
  }
}

export interface IGetPlaceResponse extends RequestResponse {
  data: IPlace | {};
}

export async function getPlaceById({ id }, authorization): Promise<IGetPlaceResponse> {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${Endpoint.places}/${id}`,
    headers: { Authorization: `Bearer ${authorization}` },
  };

  try {
    const { data } = await localAxios(options);
    console.log(data);
    return { data, error: {} };
  } catch (error) {
    console.log('server -error ----', error);
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: {} };
  }
}
