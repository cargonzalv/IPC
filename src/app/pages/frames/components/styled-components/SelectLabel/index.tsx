import styled from 'styled-components';

const DEFAULT_SELECT_LABEL_COLOR = '#4966e0';

export const SelectLabel = styled.p`
  color: ${({ theme }) => {
    if (theme.iframe && theme.iframe.colorText) {
      return `${theme.iframe.colorText};`;
    } else {
      return `${DEFAULT_SELECT_LABEL_COLOR};`;
    }
  }};
`;
