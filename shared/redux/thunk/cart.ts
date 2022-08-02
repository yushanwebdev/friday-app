/**
 * Thunks are a great place for application business logic
 */
import {AppDispatch} from '../store';
import {RootState} from '../reducers';
import {addToCart} from '../actions/cart';
import {Navigation} from 'react-native-navigation';
import config from '../../../src/config';
import Storage from '../../services/core/storage';

export const addItemsToCart =
  (componentID: string, item: any) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(addToCart(item));

    const store = getState().cart;
    Storage.set(config.keys.cart, store);

    Navigation.mergeOptions(componentID, {
      bottomTab: {
        badge: getState().cart.items.length.toString(),
      },
    });
  };
