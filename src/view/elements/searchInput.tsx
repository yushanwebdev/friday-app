import * as React from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  PressableProps,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';
import {THEME} from '../styles/theme';
import {CTEXTINPUT} from './custom';
import SVGIcons from '../assets/images/svgs';
import {GLOBAL} from '../styles/global';
import {SearchContext} from '../screens/search/Component';

type onSubmitEvent = ({
  nativeEvent,
}: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
interface Props {
  onClick: PressableProps['onPress'];
  disabled: boolean;
  style?: ViewStyle;
  onSubmit?: onSubmitEvent;
}

const SearchInput: React.FC<Props> = ({disabled, onClick, style, onSubmit}) => {
  return (
    <Pressable onPress={onClick} style={[GLOBAL.ELEMENTS.SearchInput, style]}>
      <SearchContext.Consumer>
        {search => (
          <>
            <CTEXTINPUT
              disabled={disabled}
              onSubmit={onSubmit}
              style={GLOBAL.ELEMENTS.SearchInputEle}
              value={search.searchTerm}
            />
            <SVGIcons.Search
              color={THEME.COLOR.DefaultSelected}
              style={GLOBAL.ELEMENTS.SearchInputIcon}
            />
          </>
        )}
      </SearchContext.Consumer>
    </Pressable>
  );
};

export default SearchInput;
