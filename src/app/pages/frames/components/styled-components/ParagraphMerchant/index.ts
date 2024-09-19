import styled from 'styled-components';

export const ParagraphMethod = styled.p<{ color: string }>`
  ${({ color }) => `color: ${color}`}
`;

export const FormMethod = styled.div<{ color: string }>`
  ${({ color }) => `color: ${color}`}
`;
