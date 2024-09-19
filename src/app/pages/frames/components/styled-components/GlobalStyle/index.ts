import { createGlobalStyle } from 'styled-components';

import { FONT_SIZES } from './constants';

export default createGlobalStyle`
  html {
    font-size: ${({ theme }) => FONT_SIZES[theme.fontSize] ?? FONT_SIZES.baseline}px;
  }
`;
