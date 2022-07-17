import * as React from 'react';
import {SafeAreaView, View} from 'react-native';

import {GLOBAL} from '../../styles/global';
import {CTEXT} from '../../elements/custom';

export interface Props {}

const SETTINGS: React.FC<Props> = (props: Props) => {
  React.useEffect(() => {
    console.log('Settings Mounted');
  }, []);

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={GLOBAL.LAYOUT.pageContainer}>
        <CTEXT>{'Settings'}</CTEXT>
      </View>
    </SafeAreaView>
  );
};

export default SETTINGS;
