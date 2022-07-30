import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Props} from '.';
import {BUTTON_DEFAULT} from '../../elements/buttons';
import {GLOBAL} from '../../styles/global';

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
