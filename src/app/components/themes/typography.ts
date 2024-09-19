import { remToPx } from './util';

export const typography = {
  letterSpacings: {
    tighter: remToPx('-0.05'),
    tight: remToPx('-0.025'),
    normal: remToPx('0'),
    wide: remToPx('0.025'),
    wider: remToPx('0.05'),
    widest: remToPx('0.1'),
  },

  lineHeights: {
    normal: 'normal',
    none: remToPx('1'),
    shorter: remToPx('1.25'),
    short: remToPx('1.375'),
    base: remToPx('1.5'),
    tall: remToPx('1.625'),
    taller: remToPx('2'),
    '3': remToPx('0.75'),
    '4': remToPx('1'),
    '5': remToPx('1.25'),
    '6': remToPx('1.5'),
    '7': remToPx('1.75'),
    '8': remToPx('2'),
    '9': remToPx('2.25'),
    '10': remToPx('2.5'),
  },

  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },

  fontSizes: {
    '3xs': remToPx('0.45'),
    '2xs': remToPx('0.625'),
    xs: remToPx('0.75'),
    sm: remToPx('0.875'),
    md: remToPx('1'),
    lg: remToPx('1.125'),
    xl: remToPx('1.25'),
    '2xl': remToPx('1.5'),
    '3xl': remToPx('1.875'),
    '4xl': remToPx('2.25'),
    '5xl': remToPx('3'),
    '6xl': remToPx('3.75'),
    '7xl': remToPx('4.5'),
    '8xl': remToPx('6'),
    '9xl': remToPx('8'),
  },
  fontStyles: {
    italic: 'italic',
  },
};
