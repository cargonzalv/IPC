import { InputType } from 'app/util/theme';
import { mergeStyles } from 'react-select';
import { DefaultTheme } from 'styled-components';

import { FONT_SIZES, HEIGHT_SIZES, INPUT_TYPES } from 'app/pages/frames/components/styled-components/GlobalStyle/constants';

export const IS_MULTI: boolean = false;

export const STYLES: Record<InputType, (theme: DefaultTheme) => any> = {
  basic: (theme: DefaultTheme) => defaultStyle(theme),
  line: (theme: DefaultTheme) => mergeStyles(defaultStyle(theme), lineStyle(theme)),
  rounded: (theme: DefaultTheme) => defaultStyle(theme),
};

const getColorInput = (isFlatMode: boolean, isDarkMode: boolean, isDisabled: boolean, type: string) => {
  if (isDisabled) {
    return COLORS.background.disabled;
  }
  if (isFlatMode) {
    return isDarkMode ? COLORS.background.selectedDark : COLORS.background.selectedLight;
  }
  if (type === 'borderColor') {
    return COLORS.border.default;
  }
  return COLORS.background.defaultLight;
};
const getColorOption = (isDarkMode: boolean, isSelected: boolean, type: string) => {
  const colors = {
    colorSelectedDark: COLORS[type].selectedDark,
    colorSelectedLight: COLORS[type].selectedLight,
    colorDefaultDark: COLORS[type].default,
    colorDefaultLight: COLORS[type].defaultLight,
  };
  if (isSelected) {
    return isDarkMode ? colors.colorSelectedDark : colors.colorSelectedLight;
  }
  return isDarkMode ? colors.colorDefaultDark : colors.colorDefaultLight;
};

export const getColorInputOption = (isDarkMode: boolean, isSelected: boolean) => {
  return getColorOption(isDarkMode, isSelected, 'background');
};

export const getColorOptions = (isDarkMode: boolean, isSelected: boolean) => {
  return getColorOption(isDarkMode, isSelected, 'font');
};

const getValueColor = (isFlatMode: boolean, isDarkMode: boolean) => {
  if (isFlatMode) {
    return isDarkMode ? COLORS.value.default : COLORS.value.defaultLight;
  }
  return COLORS.value.defaultLight;
};
const COLORS: Record<string, any> = {
  background: {
    defaultLight: '#ffffff',
    default: '#212247',
    selectedLight: '#F2F3FA',
    selectedDark: '#212247',
    disabled: 'rgba(0, 0, 0, 0.05)',
    focused: 'rgba(0, 0, 0, 0.05)',
    selectedDarkHover: '#585987',
    selectedLightHover: '#F7F8FD',
  },
  border: {
    default: '#D8D8E8',
    focused: '#47a8ae',
  },
  font: {
    default: '#B4B5D3',
    defaultLight : '#585987',
    disabled: 'rgba(0, 0, 0, 0.7)',
    focused: 'rgba(0, 0, 0, 0.7)',
    selected: '#585987',
    selectedLight: '#212247',
    selectedDark: '#FDFEFF'
  },
  value: {
    default: '#D8D8E8',
    defaultLight : '#212247',
  }
};

export const defaultStyle = ({isFlatMode, isDarkMode, inputType, fontSize}: any) => ({
  control: (base: any, { isDisabled }: any) => ({
    ...base,
    backgroundColor: getColorInput(isFlatMode, isDarkMode, isDisabled, 'backgroundColor'),
    color: isDarkMode ? COLORS.font.selectedDark : COLORS.font.selected,
    borderColor: getColorInput(isFlatMode, isDarkMode, isDisabled, 'borderColor'),
    borderRadius: `${INPUT_TYPES[inputType] ?? INPUT_TYPES.basic}px`,
    borderStyle: 'solid',
    borderWidth: '1px',
    height: `${HEIGHT_SIZES[fontSize] ?? HEIGHT_SIZES.baseline}px`,
    boxShadow: 'none',
    fontFamily: 'Inter',
  }),
  indicatorsContainer: (base: any, state: any) => ({
    ...base,
    fontSize: '7px',
    div: {
      color: COLORS.font.default,
      padding: '12px',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
      transition: 'all .1s ease',
    },
    transform: state.isSelected ? 'rotate(180deg)' : 'none',
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    display: 'none',
  }),
  menu: (base: any) => ({
    ...base,
    backgroundColor: '#ffffff',
    borderRadius: `${INPUT_TYPES[inputType] ?? INPUT_TYPES.basic}px`,
    boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.16)',
    margin: '0',
  }),
  menuList: (base: any) => ({
    ...base,
    borderRadius: `${INPUT_TYPES[inputType] ?? INPUT_TYPES.basic}px`,
    padding: 0,
  }),
  option: (base: any, { isSelected }: any) => ({
    ...base,
    backgroundColor: getColorInputOption(isDarkMode, isSelected),
    color: getColorOptions(isDarkMode, isSelected),
    fontFamily: 'Inter',
    fontSize: `${FONT_SIZES[fontSize] ?? FONT_SIZES.baseline}px`,
    '&:hover': {
      backgroundColor: isDarkMode ? COLORS.background.selectedDarkHover : COLORS.background.selectedLightHover,
    },
    padding: '16px 15px',
  }),
  singleValue: (base: any) => ({
    ...base,
    color: getValueColor(isFlatMode, isDarkMode),
    fontFamily: 'sans-serif',
    fontSize: `${FONT_SIZES[fontSize] ?? FONT_SIZES.baseline}px`,
    fontWeight: '300',
    height: '20px',
    lineHeight: 1,
    margin: 0,
  }),
  input: (base: any) => ({
    ...base,
    fontFamily: 'Inter',
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: '0 15px',
  }),
  placeholder: (base: any) => ({
    ...base,
    margin: '0',
  }),
});

export const lineStyle = ({ fontSize }: any) => ({
  control: (base: any) => ({
    ...base,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0 0 0 0',
    boxShadow: '0',
    fontSize: `${FONT_SIZES[fontSize] ?? FONT_SIZES.baseline}px`,
    height: '30px',
    minHeight: '30px',
  }),
  menu: (base: any) => ({
    ...base,
    top: '40px',
  }),
  singleValue: (base: any, { isDisabled }: any) => ({
    ...base,
    color: isDisabled ? 'rgba(0, 0, 0, 0.38)' : COLORS.font.default,
    fontWeight: '400',
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: '0',
  }),
});
