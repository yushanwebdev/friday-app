import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../../../shared/redux/reducers';
import {addItemsToCart} from '../../../../shared/redux/thunk/cart';
import Component from './Component';

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  addItemToCart: (params: any) => dispatch(addItemsToCart(params)),
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default CartContainer;
