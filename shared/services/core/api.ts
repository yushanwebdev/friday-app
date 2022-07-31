import config from '../../../src/config';
import {jsonToQueryString} from '../utilities/lib';
import State from '../../redux/store';

const defaultHeaders = () => {
  return {
    Accept: 'application/json',
    'X-RapidAPI-Host': config.apis.host,
    'X-RapidAPI-Key': config.apis.key,
    'Content-Type': 'application/json',
  };
};

const API = {
  get: (endpoint: string, queryParam?: any) => {
    return fetch(endpoint + jsonToQueryString(queryParam), {
      method: 'GET',
      headers: defaultHeaders(),
    });
  },
  post: (endpoint: string, params: any) => {
    return fetch(endpoint, {
      method: 'POST',
      headers: defaultHeaders(),
      body: JSON.stringify(params),
    });
  },
};

export default API;
