import { Button as ButtonFrontino } from '@conekta/frontino-ui/Button';
import { Theme } from 'common/interface';
import styled from 'styled-components';

import { BUTTON_TYPE, FONT_SIZES } from './constants';

const getButtonColor = (theme: Theme) => {
  const { button, colors } = theme;

  if (button && button.colorText) {
    return button.colorText;
  }

  return colors.primary.toLowerCase() !== colors.white ? colors.white : colors.dark;
};

const getButtonBackgroundColor = (theme: Theme) => {
  const { button, colors } = theme;

  if (button && button.backgroundColor) {
    return button.backgroundColor;
  }

  return colors.primary;
};

const Button = styled<any>(ButtonFrontino)`
  background-color: ${({ theme }) => getButtonBackgroundColor(theme)}!important;
  border-radius: ${({ theme }) => BUTTON_TYPE[theme.buttonType] ?? BUTTON_TYPE.basic}px !important;
  font-size: ${({ theme }) => FONT_SIZES[theme.fontSize] ?? FONT_SIZES.baseline}px !important;
  color: ${({ theme }) => getButtonColor(theme)} !important;
`;

export default Button;
