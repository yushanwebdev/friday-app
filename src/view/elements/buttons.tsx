import * as React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import {CTEXT} from './custom';
import {GLOBAL} from '../styles/global';
type Callback = () => any;
export interface Props {
  title: string;
  onClick: Callback;
  style?: ViewStyle;
}

export interface IconProps extends Omit<Props, 'title'> {
  icon: React.ReactElement;
}

/**
 * Default Button for the application
 */
const BUTTON_DEFAULT: React.FC<Props> = ({title, onClick, style}: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}>
    <CTEXT style={GLOBAL.CTA.Style.primaryText}>{title}</CTEXT>
  </TouchableOpacity>
);

const BUTTON_SECONDARY: React.FC<Props> = ({title, onClick, style}) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.secondary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}>
    <CTEXT style={GLOBAL.CTA.Style.secondaryText}>{title}</CTEXT>
  </TouchableOpacity>
);

const BUTTON_CATEGORY: React.FC<IconProps> = ({icon, onClick, style}) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.category, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}>
    {icon}
  </TouchableOpacity>
);

export {BUTTON_DEFAULT, BUTTON_SECONDARY, BUTTON_CATEGORY};
