import config from '../../src/config';
import API from './core/api';

export const SearchService = {
  getData: async (searchTerm: string) => {
    return API.get(`${config.apis.baseUrl}/`, {
      s: encodeURI(searchTerm),
    }).then(res => res.json());
  },
};
