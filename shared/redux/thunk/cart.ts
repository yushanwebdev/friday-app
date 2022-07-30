/**
 * Thunks are a great place for application business logic
 */
import {AppDispatch} from '../store';
import {RootState} from '../reducers';
import {addToCart} from '../actions/cart';

export const addItemsToCart =
  (item: any) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(addToCart(item));
    /**
     * Application launch Logic can go here, like
     * - Validating user token
     * - Getting data from async storage
     * - Making an API call needed for booting app
     */
  };
