import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Props} from '.';
import store from '../../../../shared/redux/store';
import {BUTTON_DEFAULT} from '../../elements/buttons';
import {GLOBAL} from '../../styles/global';
import Lottie from 'lottie-react-native';

const Cart: React.FC<Props> = props => {
  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={GLOBAL.LAYOUT.pageContainer}>
        <Lottie
          source={require('../../assets/animations/car.json')}
          autoPlay
          loop
          style={{
            width: 200,
            height: 200,
          }}
        />
        <BUTTON_DEFAULT
          title={`Add to Cart ${store.getState().cart.items.length}`}
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
