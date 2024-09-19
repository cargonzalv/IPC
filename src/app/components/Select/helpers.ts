import { DefaultTheme } from 'styled-components';

import { STYLES } from './constants';
import { IOptionType } from './interface';

export const getOptionTypeByValue = (value: any, options: IOptionType[] = []): IOptionType | undefined =>
  options.find((option: IOptionType) => option.value === value);

export const getStylesFromTheme = (theme: DefaultTheme) => STYLES.basic(theme);
