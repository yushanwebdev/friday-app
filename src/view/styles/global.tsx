import {StyleSheet, TextStyle} from 'react-native';

import {THEME} from './theme';

export const widgetPaddingValue = 16;

const LAYOUT = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: THEME.COLOR.Default,
  },
  container: {
    flex: 1,
  },
  pageContainer: {
    padding: THEME.ELEMENTS.PageContainer.padding,
  },
  shadow: THEME.SHADOW,
});

const ELEMENTS = StyleSheet.create({
  Card: {
    marginBottom: THEME.ELEMENTS.Card.marginBottom,
  },
  CategoryIcons: {
    alignItems: 'center',
    marginRight: THEME.ELEMENTS.CategoryIcons.marginRight,
  },
});

const CTA = {
  Style: StyleSheet.create({
    primary: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: THEME.COLOR.Primary,
      height: THEME.BUTTON.primary.height,
      borderWidth: THEME.BUTTON.primary.borderWidth,
      borderRadius: THEME.BUTTON.primary.borderRadius,
      paddingVertical: THEME.BUTTON.primary.paddingVertical,
      paddingHorizontal: THEME.BUTTON.primary.paddingHorizontal,
    },
    primaryText: {
      color: THEME.COLOR.Default,
      fontSize: (THEME.BUTTON.primary.text as TextStyle).fontSize,
    },
    secondary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: THEME.COLOR.Primary,
      backgroundColor: THEME.COLOR.Default,
      height: THEME.BUTTON.secondary.height,
      borderWidth: THEME.BUTTON.secondary.borderWidth,
      borderRadius: THEME.BUTTON.secondary.borderRadius,
    },
    secondaryText: {
      textAlign: 'center',
      color: THEME.COLOR.Primary,
      fontSize: (THEME.BUTTON.secondary.text as TextStyle).fontSize,
    },
  }),
  TouchableOpacity: {
    default: 0.8,
  },
};

const FONTS = StyleSheet.create({
  h1: {
    ...THEME.FONT.h1,
    fontFamily: THEME.FONT.Primary,
    color: THEME.COLOR.DefaultSelected,
  },
  body: {
    fontSize: 14,
    fontFamily: THEME.FONT.Primary,
    color: THEME.COLOR.Paragraph,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: THEME.FONT.Primary,
    color: THEME.COLOR.SecondaryTitle,
  },
});

const TEXT = StyleSheet.create({
  Default: {
    textAlign: 'left',
    fontFamily: THEME.FONT.Primary,
    fontSize: 14,
    color: THEME.COLOR.Primary,
  },
  Bold: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: THEME.FONT.Primary,
    color: THEME.COLOR.Primary,
  },
});

const TEXT_INPUT = {
  Style: StyleSheet.create({
    Default: {
      color: THEME.COLOR.DefaultSelected,
      height: THEME.FONT.input.height,
      borderRadius: THEME.FONT.input.borderRadius,
      backgroundColor: THEME.COLOR.Border,
      fontFamily: THEME.FONT.Primary,
      borderColor: THEME.COLOR.Border,
      fontSize: THEME.FONT.input.fontSize,
      borderWidth: THEME.FONT.input.borderWidth,
      paddingHorizontal: THEME.FONT.input.paddingHorizontal,
    },
    Bold: {
      fontSize: 12,
      textAlign: 'left',
      borderWidth: 1,
      fontFamily: THEME.FONT.Primary,
      borderColor: THEME.COLOR.Border,
      color: THEME.COLOR.Primary,
    },
  }),
};

const GLOBAL = {
  LAYOUT,
  ELEMENTS,
  CTA,
  FONTS,
  TEXT,
  TEXT_INPUT,
};

export {GLOBAL};
