import * as React from 'react';
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Svg, {Path} from 'react-native-svg';

const BottomNav: React.FC<{
  componentId: string;
}> = props => {
  const {width} = useWindowDimensions();

  const HEIGHT_BOTTOM_TAB = 66;
  const LINE = (width - (24 * 2 + 28 * 2 + 76)) / 2;
  const BORDER = width - (LINE + 52) * 2;
  const viewBox = `0 0 ${width} ${HEIGHT_BOTTOM_TAB - 2}`;
  const d = `M0 24 a24 24 0 0 1 24 -24 h${LINE} q16 0 28 24 a42 42 0 0 0 ${BORDER} 0  q12 -24 28 -24 h${LINE} a24 24 0 0 1 24 24 V${HEIGHT_BOTTOM_TAB} H0 z`;

  console.log('props', props);

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
      }}>
      <Svg
        style={[styles.viewBottomTab, {height: HEIGHT_BOTTOM_TAB}]}
        viewBox={viewBox}
        fill="transparent">
        <Path
          d={d}
          fill={'#fff'}
          strokeWidth={1}
          stroke={
            Platform.OS === 'ios'
              ? 'rgba(120, 121, 121, 0.06)'
              : 'rgba(120, 121, 121, 0.2)'
          }
        />
      </Svg>
      <View
        style={[
          {
            width: width,
            height: HEIGHT_BOTTOM_TAB,
            paddingBottom: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
          },
        ]}>
        <TouchableOpacity
          key={0}
          accessibilityRole="button"
          style={[
            {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginRight: 24,
              marginLeft: 24,
            },
          ]}
          onPress={() => {
            Navigation.mergeOptions(props.componentId, {
              bottomTabs: {currentTabIndex: 0},
            });
          }}>
          <Image source={require('../../assets/images/tabbar/home.png')} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={1}
          accessibilityRole="button"
          style={[
            {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginRight: 24,
              marginLeft: 24,
            },
          ]}
          onPress={() => {
            Navigation.mergeOptions(props.componentId, {
              bottomTabs: {currentTabIndex: 1},
            });
          }}>
          <Image source={require('../../assets/images/tabbar/search.png')} />
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  viewBottomTab: {
    backgroundColor: 'transparent',
    shadowColor: 'color-basic-1100',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  scan: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'color-primary-500',
  },
  icon: {
    width: 24,
    height: 24,
  },
};

export default BottomNav;
