import * as React from 'react';
import {Navigation} from 'react-native-navigation';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ListRenderItem,
  Dimensions,
} from 'react-native';

import {GLOBAL} from '../../styles/global';
import {Category} from '../../widgets/category';
import locale from '../../../constants/locale';
import {
  BUTTON_CATEGORY,
  BUTTON_DEFAULT,
  BUTTON_SECONDARY,
} from '../../elements/buttons';
import {CIMAGE, CTEXT, CTEXTINPUT, CTEXTPRICE} from '../../elements/custom';

import {Props} from './index';
import styles from './styles';
import {SCREENS} from '../../../constants/screen';
import ROUTER from '../../../navigators/router';
import SVGIcons from '../../assets/images/svgs';
import {THEME} from '../../styles/theme';
import SectionTitle from '../../elements/section/title';
import ProductDisplay from '../../elements/productDisplay';
import ProductWidget from '../../widgets/ProductWidget';
import {Carousel} from '../../elements/layout';
import CategoryWidget from '../../widgets/CategoryWidget';
import SearchInput from '../../elements/searchInput';
import Header from '../../widgets/header';

interface State {
  name: string;
  carouselItems: any[];
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      name: props.name || 'Redux + TypeScript + React Native Navigation',
      carouselItems: [
        {
          url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
        },
      ],
    };
  }

  componentDidMount() {
    console.log('>>> MOUNT <<<');
  }

  componentDidAppear() {
    console.log('>>> APPEAR <<<');
  }

  componentWillUnmount() {
    console.log('>>> UNMOUNT <<<');
  }

  showBurgerMenu() {
    Navigation.mergeOptions('drawerComponentId', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }

  showPushScreen = () => {
    const {componentId} = this.props;
    ROUTER.showPushScreen({
      componentId,
      passProps: {
        dummyText: 'Dummy Title',
      },
    });
  };

  onPressCart = () => {
    const {componentId} = this.props;

    ROUTER.showCartScreen({
      componentId,
    });
  };

  showModal = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: SCREENS.Dummy2,
              id: SCREENS.Dummy2,
            },
          },
        ],
      },
    });
  };

  renderCarouselItem: ListRenderItem<any> = ({item, index}) => (
    <CIMAGE
      key={`home-carousel-item-${index}`}
      uri={item.url}
      style={{
        width: Dimensions.get('screen').width,
        height: 200,
      }}
    />
  );

  render() {
    const {componentId, text} = this.props;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        <ScrollView
          style={GLOBAL.LAYOUT.pageContainer}
          contentContainerStyle={GLOBAL.LAYOUT.scrollViewInner}>
          <Header />
          <CategoryWidget
            data={[
              {
                name: 'Men',
                icon: <SVGIcons.CategoryIcons.Shoes />,
              },
              {
                name: 'Women',
                icon: <SVGIcons.CategoryIcons.Headset />,
              },
              {
                name: 'Devices',
                icon: <SVGIcons.CategoryIcons.Bulb />,
              },
              {
                name: 'Gadgets',
                icon: <SVGIcons.CategoryIcons.Gamepad />,
              },
              {
                name: 'Games',
                icon: <SVGIcons.CategoryIcons.Stileto />,
              },
              {
                name: 'Games',
                icon: <SVGIcons.CategoryIcons.Stileto />,
              },
              {
                name: 'Games',
                icon: <SVGIcons.CategoryIcons.Stileto />,
              },
            ]}
          />
          <ProductWidget componentId={componentId} />
          <Carousel
            data={this.state.carouselItems}
            item={this.renderCarouselItem}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
