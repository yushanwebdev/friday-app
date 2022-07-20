import * as React from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {BUTTON_CATEGORY} from '../elements/buttons';
import {Card} from '../elements/layout';
import SearchInput from '../elements/searchInput';
import {GLOBAL} from '../styles/global';
import SVGIcons from '../assets/images/svgs';
import {THEME} from '../styles/theme';

type Callback = () => any;
type onSubmitEvent = ({
  nativeEvent,
}: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
interface Props {
  inputDisabled?: boolean;
  onClick?: Callback;
  onSubmit?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const Header: React.FC<Props> = ({
  inputDisabled = false,
  onClick,
  onSubmit,
}: Props) => (
  <Card onClick={onClick}>
    <View style={[GLOBAL.LAYOUT.row, GLOBAL.ELEMENTS.Header]}>
      <SearchInput
        onClick={onSubmit}
        disabled={inputDisabled}
        style={GLOBAL.WIDGETS.headerSearchInput}
      />
      <BUTTON_CATEGORY
        onClick={onClick || (() => {})}
        style={GLOBAL.CTA.Style.cameraIcon}
        hideShadow={true}
        icon={
          <SVGIcons.Camera
            color={GLOBAL.CTA.Style.cameraIcon.color}
            style={THEME.BUTTON.cameraIcon.icon}
          />
        }
      />
    </View>
  </Card>
);

export default Header;
