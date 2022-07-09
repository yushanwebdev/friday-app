import * as React from 'react';
import {ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {THEME} from '../../../styles/theme';

interface Props {
  style?: ViewStyle;
  color?: string;
}

const defaults: Props = {
  style: {
    width: '24px',
    height: '24px',
  },
  color: THEME.COLOR.Default,
};

function Search(props: Props) {
  return (
    <Svg viewBox="0 0 50 50" style={props.style}>
      <Path
        d="M21 3C11.621 3 4 10.621 4 20s7.621 17 17 17c3.71 0 7.14-1.195 9.938-3.219l13.156 13.125 2.812-2.812-13-13.032A16.923 16.923 0 0038 20c0-9.379-7.621-17-17-17zm0 2c8.297 0 15 6.703 15 15s-6.703 15-15 15S6 28.297 6 20 12.703 5 21 5z"
        fill={props.color}
      />
    </Svg>
  );
}

Search.defaultProps = defaults;

export default {
  Search,
};
