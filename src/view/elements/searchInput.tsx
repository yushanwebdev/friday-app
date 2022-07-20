import * as React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {THEME} from '../styles/theme';
import {CTEXTINPUT} from './custom';
import SVGIcons from '../assets/images/svgs';
import {GLOBAL} from '../styles/global';

interface Props {
  onClick: PressableProps['onPress'];
  disabled: boolean;
  style?: ViewStyle;
}

const SearchInput: React.FC<Props> = ({onClick, style}) => {
  return (
    <Pressable onPress={onClick} style={[GLOBAL.ELEMENTS.SearchInput, style]}>
      <CTEXTINPUT />
      <SVGIcons.Search
        color={THEME.COLOR.DefaultSelected}
        style={GLOBAL.ELEMENTS.SearchInputIcon}
      />
    </Pressable>
  );
};

export default SearchInput;
