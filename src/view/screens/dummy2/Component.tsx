import * as React from 'react';
import {SafeAreaView} from 'react-native';

import {GLOBAL} from '../../styles/global';
import {CTEXT} from '../../elements/custom';

import {Props} from './index';
import {BUTTON_DEFAULT} from '../../elements/buttons';
import {Navigation} from 'react-native-navigation';
import {SCREENS} from '../../../constants/screen';

const DUMMY2: React.FC<Props> = (props: Props) => {
  const backNavigation = () => {
    Navigation.pop(props.componentId);
  };

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <CTEXT>{'This Screen has been pushed over Home screen'}</CTEXT>
      <BUTTON_DEFAULT
        title="Next 3"
        onClick={() => {
          Navigation.push(props.componentId, {
            component: {
              id: SCREENS.Dummy3,
              name: SCREENS.Dummy3,
            },
          });
        }}
      />
      <BUTTON_DEFAULT title="Go Back" onClick={backNavigation} />
      <BUTTON_DEFAULT
        title="Dismiss Modal"
        onClick={() => {
          Navigation.dismissModal(props.componentId);
        }}
      />
    </SafeAreaView>
  );
};

export default DUMMY2;
