import styled from 'styled-components';

export const WrapperFormCard = styled.form<any>`
  &.FormCard__disabled-border > .PaymentMethodContent {
    border: none;
    border-radius: initial;
  }
  & > .PaymentMethodContent {
    ${({ disabledBorder }) =>
      disabledBorder &&
      `
    border: none;
    border-radius: initial;
    `}
    .FormCard__form {
      .field-evaluated,
      .field-evaluated > label {
        color: ${({ theme, iframeColorText }) => iframeColorText || theme.colors.dark};
      }

      .FormCard__btn-submit {
        background-color: ${({ theme, buttonBackgroundColor }) => buttonBackgroundColor || theme.colors.primary};
        color: ${({ theme, buttonColorText }) => buttonColorText || theme.colors.white};
      }
    }
  }
`;
