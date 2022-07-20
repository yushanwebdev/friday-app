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
    padding: THEME.LAYOUT.pageContainer.padding,
  },
  shadow: THEME.SHADOW,
  scrollViewInner: {
    paddingBottom: THEME.LAYOUT.scrollViewInner.paddingBottom,
  },
  productWidgetInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const WIDGETS = StyleSheet.create({
  productWidget: {
    flexDirection: 'row',
  },
  categoryWidgetItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryWidgetIcon: {
    marginBottom: 8,
  },
  headerSearchInput: {
    flex: 1,
  },
});

const ELEMENTS = StyleSheet.create({
  Card: {
    marginBottom: THEME.ELEMENTS.Card.marginBottom,
  },
  CategoryIcons: {
    alignItems: 'center',
    marginRight: THEME.ELEMENTS.CategoryIcons.marginRight,
  },
  SectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: THEME.ELEMENTS.SectionTitle.marginBottom,
  },
  SearchInput: {
    position: 'relative',
  },
  SearchInputIcon: {
    left: 14,
    top: '50%',
    marginTop: -12,
    position: 'absolute',
    width: '24px',
    height: '24px',
  },
  Header: {
    marginVertical: THEME.ELEMENTS.Header.marginVertical,
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
    category: {
      alignItems: 'center',
      justifyContent: 'center',
      width: THEME.BUTTON.category.width,
      height: THEME.BUTTON.category.height,
      backgroundColor: THEME.COLOR.Default,
      borderRadius: THEME.BUTTON.category.borderRadius,
    },
    camera: {
      backgroundColor: THEME.COLOR.Primary,
    },
    cameraIcon: {
      color: THEME.COLOR.Default,
      backgroundColor: THEME.COLOR.Primary,
      width: THEME.BUTTON.cameraIcon.radius,
      height: THEME.BUTTON.cameraIcon.radius,
      borderRadius: THEME.BUTTON.cameraIcon.borderRadius,
      marginVertical: THEME.BUTTON.cameraIcon.marginVertical,
      marginLeft: THEME.BUTTON.cameraIcon.marginLeft,
    },
  }),
  TouchableOpacity: {
    default: 0.8,
  },
};

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
  h1: {
    ...THEME.TEXT.h1,
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
  price: {
    color: THEME.COLOR.Primary,
    fontSize: THEME.TEXT.price.fontSize,
    fontWeight: (THEME.TEXT.price.textStyle as TextStyle).fontWeight,
    marginTop: THEME.TEXT.price.margin,
  },
});

const TEXT_INPUT = {
  Style: StyleSheet.create({
    Default: {
      color: THEME.COLOR.DefaultSelected,
      height: THEME.TEXT_INPUT.input.height,
      borderRadius: THEME.TEXT_INPUT.input.borderRadius,
      backgroundColor: THEME.COLOR.BgColor,
      fontFamily: THEME.FONT.Primary,
      borderColor: THEME.COLOR.Border,
      fontSize: THEME.TEXT_INPUT.input.fontSize,
      borderWidth: THEME.TEXT_INPUT.input.borderWidth,
      paddingHorizontal: THEME.TEXT_INPUT.input.paddingHorizontal,
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

const CUSTOM = StyleSheet.create({
  CImage: {
    borderRadius: THEME.ELEMENTS.CImage.borderRadius,
  },
});

const GLOBAL = {
  LAYOUT,
  WIDGETS,
  ELEMENTS,
  CTA,
  TEXT,
  TEXT_INPUT,
  CUSTOM,
};

export {GLOBAL};
