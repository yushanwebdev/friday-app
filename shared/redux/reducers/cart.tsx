import {IAction} from '../types/IAction';
import {ACTION_TYPES} from '../constants/actionTypes';
import {CartApplicationState} from '../types/stores/cart';

const initialState: CartApplicationState = {
  items: [],
};

export default (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ACTION_TYPES.CART.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.data],
      };
    case ACTION_TYPES.CART.INIT_CART:
      return {
        ...state,
        items: action.data ?? [],
      };
    default:
      return state;
  }
};
