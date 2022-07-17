import * as React from 'react';
import {ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {THEME} from '../../../styles/theme';
import * as CategoryIcons from './category';

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

const Camera = ({style, color}: Props) => {
  return (
    <Svg viewBox="0 0 48 48" style={style}>
      <Path
        fill={color}
        d="M 20.472656 5 C 18.87426 5 17.390847 5.8519349 16.585938 7.2324219 L 14.388672 11 L 10.5 11 C 6.9280619 11 4 13.928062 4 17.5 L 4 36.5 C 4 40.071938 6.9280619 43 10.5 43 L 37.5 43 C 41.071938 43 44 40.071938 44 36.5 L 44 17.5 C 44 13.928062 41.071938 11 37.5 11 L 33.611328 11 L 31.414062 7.2324219 C 30.609153 5.8519349 29.12574 5 27.527344 5 L 20.472656 5 z M 20.472656 8 L 27.527344 8 C 28.062947 8 28.553175 8.2826276 28.822266 8.7441406 L 31.455078 13.255859 A 1.50015 1.50015 0 0 0 32.75 14 L 37.5 14 C 39.450062 14 41 15.549938 41 17.5 L 41 36.5 C 41 38.450062 39.450062 40 37.5 40 L 10.5 40 C 8.5499381 40 7 38.450062 7 36.5 L 7 17.5 C 7 15.549938 8.5499381 14 10.5 14 L 15.25 14 A 1.50015 1.50015 0 0 0 16.544922 13.255859 L 19.177734 8.7441406 C 19.446825 8.2826276 19.937053 8 20.472656 8 z M 24 17 C 19.047202 17 15 21.047206 15 26 C 15 30.952794 19.047202 35 24 35 C 28.952798 35 33 30.952794 33 26 C 33 21.047206 28.952798 17 24 17 z M 24 20 C 27.331479 20 30 22.668523 30 26 C 30 29.331477 27.331479 32 24 32 C 20.668521 32 18 29.331477 18 26 C 18 22.668523 20.668521 20 24 20 z"
      />
    </Svg>
  );
};
Camera.defaultProps = defaults;

export default {
  Search,
  Camera,
  CategoryIcons,
};
