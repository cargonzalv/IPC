import { imgMainLogo } from 'app/util/constants';
import { DefaultTheme } from 'styled-components';

export type BackgroundType = 'gray' | 'white';

export type Base64Type = 'null' | 'png' | 'jpg' | 'svg';

export type ButtonType = 'basic' | 'rounded' | 'sharp';

export type FontColorType = 'white' | 'black';

export type FontSizeType = 'baseline' | 'compact';

export type IBackgroundType = Record<BackgroundType, string>;

export type IButtonType = Record<ButtonType, number>;

export type IFontColor = Record<FontColorType, string>;

export type IFontSize = Record<FontSizeType, number>;

export type IInputType = Record<InputType, number>;

export type IThemes = Record<ThemeType, string>;

export type InputType = 'basic' | 'line' | 'rounded';
export type ImageType = 'null' | 'url' | 'base64';
export type ThemeType = 'blue' | 'dark' | 'default' | 'gray' | 'green' | 'pink' | 'red' | 'white' | 'whiteLight';
export type SizeImageType = 'default' | 'small' | 'medium' | 'large';
export const themes: Record<string, string> = {
  blue: '#4966E0',
  blueNavy: '#0a1437',
  dark: '#000000',
  default: '#4966E0',
  gray: 'rgba(0, 0, 0, 0.2)',
  green: '#008300',
  pink: '#e3008b',
  red: '#c72825',
  whiteLight: '#f9f9f9',
  white: '#ffffff',
};

export const themeInitialValue = {
  background: {
    body: themes.white,
    header: themes.blueNavy,
  },
  buttonType: 'basic',
  colors: {
    ...themes,
    background: themes.white,
    font: 'black',
    primary: themes.default,
    secondary: themes.default,
  },
  enableWhiteLabel: false,
  fontSize: 'baseline',
  inputType: 'basic',
  letters: {
    paymentMethods: {
      color: themes.dark,
    },
  },
  logo: {
    size: 'default',
    source: imgMainLogo,
    typeImage: 'null',
    typeBase64: 'null',
  },
  states: {
    empty: {
      borderColor: themes.gray,
    },
    invalid: {
      borderColor: themes.red,
    },
    valid: {
      borderColor: themes.green,
    },
  },
};

export const getTheme = (): DefaultTheme => {
  const xpropsDefaultTheme = 'default';
  const theme = { ...themeInitialValue };

  const primaryColorRequested = themes[xpropsDefaultTheme] ?? themes.default;
  const primaryColor: string =
    primaryColorRequested && isHexadecimalValue(primaryColorRequested)
      ? primaryColorRequested
      : themes[xpropsDefaultTheme] ?? themes.default;

  theme.colors.primary = primaryColor;

  return theme;
};

export const isHexadecimalValue = (value: string): boolean => /^#[0-9A-F]{6}$/i.test(value);
