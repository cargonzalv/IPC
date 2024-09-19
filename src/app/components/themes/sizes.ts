import { SPACING } from './spacing';
import { remToPx } from './util';

const largeSizes = {
  max: 'max-content',
  min: 'min-content',
  full: '100%',
  '3xs': remToPx('14'),
  '2xs': remToPx('16'),
  xs: remToPx('20'),
  sm: remToPx('24'),
  md: remToPx('28'),
  lg: remToPx('32'),
  xl: remToPx('36'),
  '2xl': remToPx('42'),
  '3xl': remToPx('48'),
  '4xl': remToPx('56'),
  '5xl': remToPx('64'),
  '6xl': remToPx('72'),
  '7xl': remToPx('80'),
  '8xl': remToPx('90'),
  prose: '60ch',
};

const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

const sizes = {
  ...SPACING.space,
  ...largeSizes,
  container,
};

export const SIZES = {
  sizes,
};
