import * as React from 'react';
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  TextStyle,
} from 'react-native';

import {GLOBAL} from '../styles/global';
import {THEME} from '../styles/theme';

export interface TextProps {
  children: React.ReactElement | string;
  style?: StyleProp<TextStyle>;
}

type onSubmitEvent = ({
  nativeEvent,
}: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
export interface TextInputProps {
  style?: Object;
  value?: string;
  disabled?: boolean;
  textInputRef?: any;
  placeholderTextColor?: string;
  onSubmit?: onSubmitEvent;
}

export interface ImageProps {
  path?: ImageSourcePropType;
  uri?: string;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
}

const CTEXT: React.FC<TextProps> = (props: TextProps) => (
  <Text style={[GLOBAL.TEXT.Default, props.style]}>{props.children}</Text>
);

const CTEXTINPUT: React.FC<TextInputProps> = (props: TextInputProps) => {
  const {
    style,
    placeholderTextColor = THEME.COLOR.Secondary,
    textInputRef,
    disabled = false,
    onSubmit,
    value,
  } = props;
  const [data, setData] = React.useState(value);

  return (
    <TextInput
      ref={textInputRef}
      value={data}
      editable={!disabled}
      onChange={e => setData(e.nativeEvent.text)}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid={'transparent'}
      onSubmitEditing={onSubmit}
      style={[GLOBAL.TEXT_INPUT.Style.Default, style]}
      autoCorrect={false}
    />
  );
};

const CTEXTPRICE: React.FC<TextProps> = (props: TextProps) => (
  <Text style={[GLOBAL.TEXT.Default, GLOBAL.TEXT.price, props.style]}>
    {props.children}
  </Text>
);

const CIMAGE: React.FC<ImageProps> = ({
  style,
  path,
  uri,
  resizeMode,
}: ImageProps) => (
  <Image
    style={[GLOBAL.CUSTOM.CImage, style]}
    resizeMode={resizeMode || 'cover'}
    source={path ? path : {uri}}
  />
);

export {CTEXT, CTEXTINPUT, CTEXTPRICE, CIMAGE};
