import styled from 'styled-components';

export type ITextFieldWrapper = {
  error: string;
  inputEmpty: boolean;
  valid: boolean;
  touched: boolean;
  inputType: string;
  theme: any;
};

const checkBorder = (validation: boolean | string, border: string, inputType: string) =>
  validation && `${inputType}: solid 0.0714285714em ${border};`;

const getBorder = (inputType: string, primary: string) => `${inputType}: 0.0714285714em solid ${primary}`;

const getBorderByState = ({
  error,
  inputEmpty,
  valid,
  touched,
  inputType,
  theme: {
    colors: { primary },
    states: {
      empty: { borderColor: emptyBorder },
      invalid: { borderColor: invalidBorder },
      valid: { borderColor: validBorder },
    },
  },
}: ITextFieldWrapper) =>
  checkBorder(inputEmpty, emptyBorder, inputType) ||
  checkBorder(valid, validBorder, inputType) ||
  checkBorder(error && touched, invalidBorder, inputType) ||
  getBorder(inputType, primary);

const getLabelColor = ({ theme }: any) => {
  if (theme.iframe && theme.iframe.colorText) {
    return `color: ${theme.iframe.colorText};`;
  }
};

export const TextFieldWrapper = styled.div<ITextFieldWrapper>`
  .frontino-form-control--textbox .frontino-form-control__container fieldset {
    ${(props) => getBorderByState(props)}
  }

  .frontino-form-control--textbox.frontino-form-control--error .frontino-form-control__container fieldset {
    ${(props) => getBorderByState(props)}
  }

  .frontino-form-control__label,
  .frontino-form-control .frontino-form-control__field,
  .frontino-form-control--focused .frontino-form-control__label {
    ${(props) => getLabelColor(props)}
  }
`;
