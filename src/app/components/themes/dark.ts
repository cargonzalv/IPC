import { extendTheme, withDefaultColorScheme } from '@chakra-ui/theme-utils';
import { theme as defaultTheme } from '@chakra-ui/theme';

import { BASIC_COMPONENTS_CONFIG } from '../defaultComponentsConfig';
import { SIZES } from './sizes';
import { CustomTheme } from './type';
import { IPersonalizationOptions } from 'common/interface';
import { SPACING } from './spacing';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

export const darkTheme: (props: IPersonalizationOptions) => CustomTheme = ({
  colorText = '#585987',
  colorLabel = '#585987',
  colorPrimary = '#081133',
}: IPersonalizationOptions) => {
  return extendTheme(
    {
      ...defaultTheme,
      styles: {
        ...defaultTheme.styles,
      },
      colors: {
        colorText,
        colorLabel,
        colorPrimary,
        primary: {
          50: '#DAD8FA',
          100: '#BAB5D3',
          200: '#DAD8FA',
          300: '#8d8fba',
          400: '#081133',
          500: '#171d4d',
          600: '#585987',
          700: '#171d4d',
          800: '#212247',
          900: '#585987',
        },
        tertiary: {
          50: '#8a93e5',
          100: '#E5EDFF',
          200: '#E5EDFF',
          300: 'AABCFA',
          400: '#AABCFA',
          500: '#2c4cf5',
          600: '#2c4cf5',
          700: '#090E94',
          800: '#090E94',
          900: '#090E94',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#F2F3FA',
          200: '#F7F8FD',
          300: '#FDFEFF',
          400: '#EDF2F7',
          500: '#B4B5D3',
          600: '#f8f9fa',
          700: '#f8f9fa',
          800: '#f8f9fa',
          900: '#f8f9fa',
        },
        alert: {
          50: '#FFE1DB',
          100: '#FF004D',
          500: '#FF6A73',
          900: '#801212',
        },
        success: {
          50: '#CFFDDF',
          100: '#32EB96',
          500: '#03B585',
          900: '#006644',
        },
        informative: {
          50: '#FFFBBF',
          100: '#FFE945',
          500: '#F7C325',
          900: '#D68F00',
        },
        text: {
          100: '#000',
          500: '#040a20',
        },
        disabled: {
          50: '#f2f2f26b',
          100: '#4c4c4c',
          200: '#D8D8E8',
        },
        backgroundMode: {
          dark: '#081133',
          light: '#FDFEFF',
        },
      },
      ...SIZES,
      ...SPACING,
      ...typography,
      breakpoints,
      components: BASIC_COMPONENTS_CONFIG,
    },
    withDefaultColorScheme({
      colorScheme: 'primary',
    }),
  );
};
