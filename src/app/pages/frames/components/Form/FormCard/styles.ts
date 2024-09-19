import styled from 'styled-components';

export const WrapperFormCard = styled.form<any>`
  &.FormCard__disabled-border > .PaymentMethodContent {
    border: none;
    border-radius: initial;
  }
  & > .PaymentMethodContent {
    .FormCard__form {
      .field-evaluated,
      .field-evaluated > label {
        color: ${({ theme, iframeColorText }) => iframeColorText || theme.colors.dark};
      }

      .FormCard__btn-submit {
        background-color: ${({ theme, buttonBackgroundColor }) => buttonBackgroundColor || theme.colors.primary};
        color: ${({ theme, buttonColorText }) => {
          if (buttonColorText) {
            return buttonColorText;
          } else {
            return theme.colors.primary.toLowerCase() === theme.colors.white ? theme.colors.dark : theme.colors.white;
          }
        }};
      }
    }
  }
`;

export const FormMethodCard = styled.div<{ color: string }>`
  ${({ color }) => `color: ${color}`}
`;
