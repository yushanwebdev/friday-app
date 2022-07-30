import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Dispatch} from 'redux';
import {RootState} from '../../../../shared/redux/reducers';
import {IAction} from '../../../../shared/redux/types/IAction';
import {BUTTON_DEFAULT} from '../../elements/buttons';
import {GLOBAL} from '../../styles/global';

interface Props {
  componentId: string;
  addItemToCart: (
    componentID: string,
    params: any,
  ) => (dispatch: Dispatch<IAction<any>>, getState: () => RootState) => void;
}

const Cart: React.FC<Props> = props => {
  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={GLOBAL.LAYOUT.pageContainer}>
        <BUTTON_DEFAULT
          title="Add to Cart"
          onClick={() =>
            props.addItemToCart(props.componentId, {
              item: 'Speakers',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
