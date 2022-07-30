/**
 * This file includes all the reducers under reducers directory,
 * Import all and add to combineReducers to use any among whole app
 */
import {combineReducers} from 'redux';

import app from './app';
import cart from './cart';
import {IAction} from '../types/IAction';
import {ApplicationState} from '../types/stores/app';
import {CartApplicationState} from '../types/stores/cart';

export interface RootState {
  app: ApplicationState;
  cart: CartApplicationState;
}

export default combineReducers<RootState, IAction<any>>({
  app,
  cart,
});
