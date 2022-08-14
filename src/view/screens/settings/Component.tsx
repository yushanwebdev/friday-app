import * as React from 'react';
import {SafeAreaView, View} from 'react-native';

import {GLOBAL} from '../../styles/global';
import {CTEXT} from '../../elements/custom';
import BottomNav from '../../widgets/BottomNav';

export interface Props {
  componentId: string
}

const SETTINGS: React.FC<Props> = (props: Props) => {
  React.useEffect(() => {
    ('Settings Mounted');
  }, []);

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={GLOBAL.LAYOUT.pageContainer}>
        <CTEXT>{'Settings'}</CTEXT>
      </View>
      <BottomNav componentId={props.componentId} />
    </SafeAreaView>
  );
};

export default SETTINGS;
