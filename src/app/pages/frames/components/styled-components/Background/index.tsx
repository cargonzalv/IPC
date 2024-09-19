import styled from 'styled-components';

import { BACKGROUND_COLOR } from './constants';

const Background = styled.div`
  background-color: ${({ theme }) => BACKGROUND_COLOR[theme.colors.background] ?? BACKGROUND_COLOR.white};
`;
export default Background;
