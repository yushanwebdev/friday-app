import * as React from 'react';
import {View, Image, SafeAreaView} from 'react-native';

import styles from './styles';
import {GLOBAL} from '../../styles/global';
import {BUTTON_DEFAULT} from '../../elements/buttons';
import {tabbedNavigation} from '../../../navigators/navigation';

import {Props} from './index';
import {Navigation} from 'react-native-navigation';
import {SCREENS} from '../../../constants/screen';
import ROUTER from '../../../navigators/router';

const SPLASH: React.FC<Props> = (props: Props) => {
  React.useEffect(() => {
    const {splashLaunched} = props;
    splashLaunched();
  }, []);

  const navigateToHome = () => {
    tabbedNavigation();
  };

  const pushToScreen = () => {
    const {componentId} = props;

    ROUTER.showPushScreen({
      componentId,
    });
  };

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../../assets/images/rnn2.png')}
        />
        <Image
          resizeMode={'center'}
          source={require('../../assets/images/rn_ts.png')}
        />
        <BUTTON_DEFAULT title={'Continue To App'} onClick={pushToScreen} />
      </View>
    </SafeAreaView>
  );
};

export default SPLASH;
