import {Platform} from 'react-native';

const COLOR = {
  // CTA
  Primary: '#04C56A',
  Secondary: '#399BE0',
  Default: '#FFFFFF',
  DefaultSelected: '#222222',
  Border: '#E7E7E8',
  Success: '#2BC480',
  Warning: '#D91E5B',
  BgColor: '#F7F7F7',

  // Status Bar
  StatusBar: 'transparent',

  // Text
  Title: '#393939',
  SecondaryTitle: '#4E4E50',
  Paragraph: '#BDBEBF',
};

const FONT = {
  Primary: 'Helvetica',
};

const TEXT = {
  h1: {
    fontSize: 22,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    textStyle: {
      fontWeight: 'bold',
    },
    margin: 8,
  },
};

const TEXT_INPUT = {
  input: {
    height: 36,
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: 18,
    paddingHorizontal: 12,
  },
};

const BUTTON = {
  radius: 5,
  primary: {
    height: 60,
    borderWidth: 0,
    borderRadius: 5,
    paddingVertical: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    text: {
      fontSize: 14,
    },
  },
  secondary: {
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    text: {
      fontSize: 14,
    },
  },
  category: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  cameraIcon: {
    radius: 36,
    borderRadius: 18,
    marginVertical: 0,
    marginLeft: 15,
    icon: {width: 22, height: 22},
  },
};

const ELEMENTS = {
  CategoryIcons: {marginRight: 20},
  Card: {marginBottom: 30},
  CImage: {
    borderRadius: 10,
  },
  SectionTitle: {
    marginBottom: 10,
  },

  SearchInputIcon: {
    paddingHorizontal: 40,
  },
  Header: {
    marginVertical: 5,
  },
};

const LAYOUT = {
  pageContainer: {
    padding: 16,
  },
  scrollViewInner: {
    paddingBottom: 20,
  },
};

const SHADOW = {
  shadowOpacity: 0.25,
  shadowRadius: 3,
  shadowOffset: {width: 3, height: 3},
  elevation: Platform.OS === 'ios' ? 0 : 3,
};

const THEME = {
  COLOR,
  FONT,
  TEXT,
  TEXT_INPUT,
  BUTTON,
  ELEMENTS,
  LAYOUT,
  SHADOW,
};

export {THEME};
