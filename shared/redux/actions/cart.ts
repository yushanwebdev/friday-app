import {IAction} from '../types/IAction';
import {ACTION_TYPES} from '../constants/actionTypes';
import {CartApplicationState} from '../types/stores/cart';

export const addToCart = (data: any): IAction<CartApplicationState> => ({
  type: ACTION_TYPES.CART.ADD_TO_CART,
  data,
});

export const initCart = (data: any): IAction<CartApplicationState> => ({
  type: ACTION_TYPES.CART.INIT_CART,
  data,
});
