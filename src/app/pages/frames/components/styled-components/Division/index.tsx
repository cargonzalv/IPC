import styled from 'styled-components';

const Division = styled.div`
  color: ${({ theme }) =>
    theme.colors.primary.toLowerCase() !== theme.colors.white ? theme.colors.primary : theme.colors.dark};
`;

export default Division;
