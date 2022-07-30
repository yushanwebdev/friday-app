import {IAction} from '../types/IAction';
import {ApplicationState} from '../types/stores/app';
import {ACTION_TYPES} from '../constants/actionTypes';

export const addToCart = (data: any): IAction<ApplicationState> => ({
  type: ACTION_TYPES.CART.ADD_TO_CART,
  data,
});
