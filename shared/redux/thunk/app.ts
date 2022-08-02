/**
 * Thunks are a great place for application business logic
 */
import {AppDispatch} from '../store';
import {RootState} from '../reducers';
import {splashLaunched} from '../actions/app';
import Storage from '../../services/core/storage';
import config from '../../../src/config';

export const splashScreenLaunched =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(splashLaunched());
    /**
     * Application launch Logic can go here, like
     * - Validating user token
     * - Getting data from async storage
     * - Making an API call needed for booting app
     */

    const cart = await Storage.get(config.keys.cart);
    console.log('>>> cart', cart);
  };
