import styled from 'styled-components';

const DEFAULT_PARAGRAPH_COLOR = '#636363';

export const ParagraphAgreementRequirement = styled.p`
  color: ${({ theme }) => {
    if (theme.iframe && theme.iframe.colorText) {
      return `${theme.iframe.colorText};`;
    } else {
      return `${DEFAULT_PARAGRAPH_COLOR};`;
    }
  }};
`;
