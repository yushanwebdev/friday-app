/**
 * Application navigation stacks to be defined here.
 */
import {Navigation} from 'react-native-navigation';

import {SCREENS} from '../constants/screen';
import {TYPOGRAPHY} from '../view/styles/typography';

export const STATUS_BAR_OPTIONS = {
  hideWithTopBar: true,
  backgroundColor: TYPOGRAPHY.COLOR.StatusBar,
};

export const showSplash = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SCREENS.Drawer,
            id: SCREENS.Drawer,
          },
        },
        center: {
          stack: {
            children: [
              {
                component: {
                  id: SCREENS.Splash,
                  name: SCREENS.Splash,
                },
              },
            ],
          },
        },
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
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
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
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
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
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/cart.png'),
                      selectedIcon: require('../view/assets/images/tabbar/cart_active.png'),
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
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/setting.png'),
                      selectedIcon: require('../view/assets/images/tabbar/setting_active.png'),
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

export default tabbedNavigation;
