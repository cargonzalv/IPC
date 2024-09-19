import styled from 'styled-components';

import { FONT_COLOR } from './constants';

const FontColor = styled.div`
  color: ${({ theme }) => FONT_COLOR[theme.colors.font] ?? FONT_COLOR.black};
`;
export default FontColor;
