import styled from 'styled-components';

export const WrapperHeader = styled.div<{ customLogo: boolean; headerBackgroundColor: string }>`
  & > .checkout-header {
    background-color: ${({ theme, customLogo, headerBackgroundColor }) =>
      customLogo && headerBackgroundColor ? theme.colors.white : '#f1f3f4'};

    .checkout-header__total {
      color: ${({ theme, customLogo, headerBackgroundColor }) => {
        if (customLogo) {
          return theme.colors.dark;
        } else if (headerBackgroundColor === theme.colors.blueNavy) {
          return theme.colors.white;
        } else {
          return theme.colors.dark;
        }
      }};
    }
  }
`;
