import axios, { AxiosRequestConfig } from 'axios';
import { get } from 'lodash';
import qs from 'qs';
import { API_URL } from '../constants';
import { RequestResponse } from '../interfaces';
import { Endpoint } from '../enums';

export interface LocationParams {
  ParentLocationId?: number;
  OrderBy?: string;
  Page?: number;
  PageSize?: number;
  MaxPageSize?: number;
}
interface ILocation {
  id: number;
  name: string;
  parentLocation: number | null;
}

interface ILocationsResponse extends RequestResponse {
  data:
    | {
        locations: ILocation[];
      }
    | {};
}

export async function getLocations(params: LocationParams): Promise<ILocationsResponse> {
  const formattedParams = qs.stringify(params);
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${Endpoint.Locations}?${formattedParams}`,
    baseURL: API_URL,
  };

  try {
    const { data } = await axios(options);
    console.log(data);
    const { results: locations } = data;
    return { data: { locations }, error: {} };
  } catch (error) {
    const desc = get(error, 'response.data.error_description', 'server error');
    return { error: desc, data: {} };
  }
}
