import { TextFieldProps } from '@conekta/frontino-ui/TextField/TextField';
import { IFieldEvaluated } from 'app/pages/frames/components/Form/FieldEvaluated/interface';
import { InputType } from 'app/util/theme';
import { ReactNode } from 'react';

export type TFormComponentType = 'checkbox' | 'email' | 'select' | 'tel' | 'text' | 'url' | 'number';

export interface IError {
  hide?: boolean;
  name: string;
  reason?: string | null;
}

interface IDescriptionField {
  className?: string;
  text?: string;
}

export type IFormControlsProps = Record<string, IFieldEvaluated | IFormControlsProps>;

export interface IInputForm extends TextFieldProps {
  alignInput?: string;
  className?: string;
  classNameFieldset?: string;
  descriptionField?: IDescriptionField;
  fieldsetNoMarginLeft?: boolean;
  hideError?: boolean;
  icon?: string;
  input: any;
  labelOptions?: any;
  labelType?: InputType;
  maxLength?: number;
  meta: IMeta;
  placeholder?: string;
  tooltipHelper?: ReactNode;
  onChange?: (event: any) => void;
  format?: string;
  prefix?: string;
  rightElement?: ReactNode;
}
