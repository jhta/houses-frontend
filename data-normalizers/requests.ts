import { IOwnerRequestParams, IGetOwnerRequestResponse, IRequest, getOwnerRequests } from '../services/apis/requests';

function normalizeRequest(request: IRequest) {
  console.log('normalize the data request');
}

export async function getNormalizedOwnerRequests(params: IOwnerRequestParams, auth: string) {
  try {
    const { data }: IGetOwnerRequestResponse = await getOwnerRequests(params, auth);
  } catch (e) {
    console.log(e);
    return { data: {}, errors: [e] };
  }
}
