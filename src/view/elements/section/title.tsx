import * as React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  TextStyle,
} from 'react-native';
import {GLOBAL} from '../../styles/global';
import {CTEXT} from '../custom';

export interface Props {
  title: string;
  subTitle?: string;
  style?: StyleProp<TextStyle>;
  onClick?: (event: GestureResponderEvent) => void;
}

const SectionTitle: React.FC<Props> = ({title, subTitle, style, onClick}) => (
  <Pressable onPress={onClick} style={[GLOBAL.ELEMENTS.SectionTitle, style]}>
    <CTEXT style={GLOBAL.TEXT.h1}>{title}</CTEXT>
    {subTitle && <CTEXT style={GLOBAL.TEXT.subTitle}>{subTitle}</CTEXT>}
  </Pressable>
);

export default SectionTitle;
