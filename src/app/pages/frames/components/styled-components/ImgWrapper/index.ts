import styled from 'styled-components';

export const ImgWrapper = styled.img<{ size: string }>`
  ${({ size }) =>
    (size === 'large' && 'width: 120px; height: 60px;') ||
    (size === 'medium' && 'width: 72px; height: 24px;') ||
    (size === 'small' && 'width: 48px; height: 48px;')}
`;

export const HeaderWrapper = styled.div<{ backgroundColor: string }>`
  ${({ backgroundColor }) => `background-color: ${backgroundColor}`}
`;
