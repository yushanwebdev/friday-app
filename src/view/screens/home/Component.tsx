import * as React from 'react';
import {Navigation} from 'react-native-navigation';
import {SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';

import {GLOBAL} from '../../styles/global';
import {Category} from '../../widgets/category';
import locale from '../../../constants/locale';
import {
  BUTTON_CATEGORY,
  BUTTON_DEFAULT,
  BUTTON_SECONDARY,
} from '../../elements/buttons';
import {CTEXT, CTEXTINPUT, CTEXTPRICE} from '../../elements/custom';

import {Props} from './index';
import styles from './styles';
import {SCREENS} from '../../../constants/screen';
import ROUTER from '../../../navigators/router';
import SVGIcons from '../../assets/images/svgs';
import {THEME} from '../../styles/theme';
import SectionTitle from '../../elements/section/title';
import ProductDisplay from '../../elements/productDisplay';
import ProductWidget from '../../widgets/ProductWidget';

interface State {
  name: string;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      name: props.name || 'Redux + TypeScript + React Native Navigation',
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

  render() {
    const {componentId, text} = this.props;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        <ScrollView
          style={GLOBAL.LAYOUT.pageContainer}
          contentContainerStyle={GLOBAL.LAYOUT.scrollViewInner}>
          <TouchableOpacity onPress={this.onPressCart}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={require('../../assets/images/cart.png')}
            />
          </TouchableOpacity>
          <Category componentId={componentId} title={locale.Categories} />
          <CTEXT>{locale.Home}</CTEXT>
          <CTEXT>{text}</CTEXT>
          <CTEXTINPUT />
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{
              uri: 'sample',
            }}
          />
          <BUTTON_DEFAULT
            onClick={this.showPushScreen}
            title={'Push Screen'}
            style={{
              alignSelf: 'center',
              marginTop: 50,
              width: 250,
            }}
          />
          <BUTTON_SECONDARY
            onClick={this.showModal}
            title={'Show Modal'}
            style={{
              alignSelf: 'center',
              marginTop: 50,
              width: 250,
            }}
          />
          <CTEXT style={GLOBAL.TEXT.h1}>Categories</CTEXT>
          <CTEXT style={GLOBAL.TEXT.subTitle}>See all</CTEXT>
          <CTEXT style={GLOBAL.TEXT.body}>Bang and Olufsen</CTEXT>
          <SVGIcons.Search color={THEME.COLOR.Primary} />
          <BUTTON_CATEGORY
            icon={<SVGIcons.CategoryIcons.Shoes />}
            onClick={() => {}}
          />
          <SectionTitle title="Categories" subTitle="See All" />
          <BUTTON_CATEGORY
            icon={<SVGIcons.Camera />}
            onClick={() => {}}
            style={GLOBAL.CTA.Style.camera}
            hideShadow={false}
          />
          <CTEXTPRICE>$755</CTEXTPRICE>
          <ProductDisplay />
          <ProductWidget componentId={componentId} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
