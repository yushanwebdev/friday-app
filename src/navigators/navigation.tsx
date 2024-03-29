/**
 * Application navigation stacks to be defined here.
 */
import {Navigation} from 'react-native-navigation';
import store from '../../shared/redux/store';

import {SCREENS} from '../constants/screen';
import {THEME} from '../view/styles/theme';

export const STATUS_BAR_OPTIONS = {
  hideWithTopBar: true,
  backgroundColor: THEME.COLOR.StatusBar,
};

export const showSplash = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: SCREENS.Splash,
              name: SCREENS.Splash,
              options: {
                statusBar: STATUS_BAR_OPTIONS,
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const tabbedNavigation = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SCREENS.Drawer,
            id: 'drawerComponentId',
          },
        },
        center: {
          bottomTabs: {
            id: 'BottomTabsId',
            options: {
              bottomTabs: {
                animate: false,
                animateTabSelection: false,
                titleDisplayMode: 'alwaysShow',
                visible: false,
              },
            },
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Home,
                        passProps: {
                          text: 'This is Home',
                        },
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      fontSize: 14,
                      text: '',
                      textColor: THEME.COLOR.Primary,
                      selectedTextColor: THEME.COLOR.Warning,
                      selectedIconColor: THEME.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/home.png'),
                      selectedIcon: require('../view/assets/images/tabbar/home_active.png'),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Search,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: '',
                      fontSize: 14,
                      textColor: THEME.COLOR.Primary,
                      selectedTextColor: THEME.COLOR.Warning,
                      selectedIconColor: THEME.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/search.png'),
                      selectedIcon: require('../view/assets/images/tabbar/search_active.png'),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Cart,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: '',
                      fontSize: 14,
                      textColor: THEME.COLOR.Primary,
                      selectedTextColor: THEME.COLOR.Warning,
                      selectedIconColor: THEME.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/cart.png'),
                      selectedIcon: require('../view/assets/images/tabbar/cart_active.png'),
                      badge: store.getState().cart.items.length.toString(),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Settings,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: '',
                      fontSize: 14,
                      textColor: THEME.COLOR.Primary,
                      selectedTextColor: THEME.COLOR.Warning,
                      selectedIconColor: THEME.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/setting.png'),
                      selectedIcon: require('../view/assets/images/tabbar/setting_active.png'),
                      badge: '1',
                      badgeColor: THEME.COLOR.Warning,
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
