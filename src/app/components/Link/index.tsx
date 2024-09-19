import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.7)'};
  font-weight: 600;
  text-decoration: none;
`;
