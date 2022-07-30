import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../../../shared/redux/reducers';
import {addItemsToCart} from '../../../../shared/redux/thunk/cart';
import {IAction} from '../../../../shared/redux/types/IAction';
import {CartApplicationState} from '../../../../shared/redux/types/stores/cart';
import Component from './Component';

interface IStateToProps {
  cart: CartApplicationState;
}

interface IDispatchToProps {
  addItemToCart: (
    componentID: string,
    params: any,
  ) => (dispatch: Dispatch<IAction<any>>, getState: () => RootState) => void;
}

export interface Props extends IStateToProps, IDispatchToProps {
  componentId: string;
}

const mapStateToProps = (state: RootState): IStateToProps => ({
  cart: state.cart,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
): IDispatchToProps => ({
  addItemToCart: (componentID: string, params: any) =>
    dispatch(addItemsToCart(componentID, params)),
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default CartContainer;
