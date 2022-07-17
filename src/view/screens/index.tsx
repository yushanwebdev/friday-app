import * as React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import {ACTION_BUTTONS, SCREENS} from '../../constants/screen';

import * as Splash from './splash';
import * as Home from './home';
import * as Settings from './settings';
import * as Drawer from './drawer';
import * as Dummy from './dummy';
import * as Dummy2 from './dummy2';
import * as Listings from './Listings';
import * as CART from '../elements/cartButton';

const registerComponentWithRedux =
  (redux: any) => (name: string, screen: any) => {
    Navigation.registerComponent(
      name,
      () => (props: any) =>
        (
          <Provider store={redux.store}>
            <screen.default {...props} />
          </Provider>
        ),
      () => screen.default,
    );
  };

export function registerScreens(redux: any) {
  registerComponentWithRedux(redux)(SCREENS.Splash, Splash);
  registerComponentWithRedux(redux)(SCREENS.Home, Home);
  registerComponentWithRedux(redux)(SCREENS.Settings, Settings);
  registerComponentWithRedux(redux)(SCREENS.Drawer, Drawer);
  registerComponentWithRedux(redux)(SCREENS.Dummy, Dummy);
  registerComponentWithRedux(redux)(SCREENS.Dummy2, Dummy2);
  registerComponentWithRedux(redux)(SCREENS.Listings, Listings);
  registerComponentWithRedux(redux)(ACTION_BUTTONS.Cart, CART);
}
