import api from './core/api';
import config from '../../src/config';
import * as Sentry from '@sentry/react-native';

export const HomeService = {
  loadData: async (searchTerm: string) => {
    return api
      .get(config.apis.search + encodeURI(searchTerm))
      .then(res => res.json())
      .catch(err => {
        console.log('err', err);
        Sentry.captureMessage(err.message);

        return Promise.resolve({error: err});
      });
  },
};
