import * as React from 'react';
import {SafeAreaView} from 'react-native';

import {GLOBAL} from '../../styles/global';
import {CTEXT} from '../../elements/custom';

import {Props} from './index';
import {BUTTON_DEFAULT} from '../../elements/buttons';
import {Navigation} from 'react-native-navigation';
import {SCREENS} from '../../../constants/screen';

const DUMMY: React.FC<Props> = (props: Props) => {
  const backNavigation = () => {
    Navigation.pop(props.componentId);
  };

  React.useEffect(() => {
    console.log('>>> DUMMY MOUNT <<<');

    return () => {
      console.log('>>> DUMMY UNMOUNT <<<');
    };
  }, []);

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <CTEXT>{'This Screen has been pushed over Home screen'}</CTEXT>
      <BUTTON_DEFAULT
        title="Next 2"
        onClick={() => {
          Navigation.push(props.componentId, {
            component: {
              id: SCREENS.Dummy2,
              name: SCREENS.Dummy2,
            },
          });
        }}
      />
      <BUTTON_DEFAULT title="Go Back" onClick={backNavigation} />
    </SafeAreaView>
  );
};

export default DUMMY;
